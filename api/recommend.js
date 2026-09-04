// Vercel serverless function: rank candidate courses against a natural-language goal with OpenAI.
// Zero dependencies. Needs OPENAI_API_KEY in the project env; OPENAI_MODEL optional.
const MODELS = [process.env.OPENAI_MODEL, 'gpt-5.6', 'gpt-5.5', 'gpt-5', 'gpt-4.1'].filter(Boolean);

const SCHEMA = {
  name: 'course_picks',
  strict: true,
  schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      summary: { type: 'string', description: 'One sentence on how you read the goal.' },
      picks: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            id: { type: 'string' },
            reason: { type: 'string', description: 'One specific sentence tying this course to the goal.' }
          },
          required: ['id', 'reason']
        }
      }
    },
    required: ['summary', 'picks']
  }
};

async function callOpenAI(model, key, system, user) {
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
      response_format: { type: 'json_schema', json_schema: SCHEMA }
    })
  });
  const text = await r.text();
  if (!r.ok) { const err = new Error(`openai ${r.status}: ${text.slice(0, 300)}`); err.status = r.status; err.body = text; throw err; }
  const data = JSON.parse(text);
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('empty completion');
  return { parsed: JSON.parse(content), model: data.model || model };
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'POST') { res.status(405).json({ error: 'POST only' }); return; }
  const key = process.env.OPENAI_API_KEY;
  if (!key) { res.status(503).json({ error: 'OPENAI_API_KEY not set' }); return; }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  const goal = String(body?.goal || '').slice(0, 500).trim();
  const candidates = Array.isArray(body?.candidates) ? body.candidates.slice(0, 60) : [];
  const schedule = Array.isArray(body?.schedule) ? body.schedule.slice(0, 20) : [];
  const n = Math.min(12, Math.max(3, Number(body?.n) || 8));
  if (!goal || !candidates.length) { res.status(400).json({ error: 'goal and candidates required' }); return; }

  const system = [
    'You are an academic advisor at the University of Michigan helping a senior pick Fall 2026 courses.',
    'You receive the student\'s goal in their own words, their fixed weekly schedule, and a JSON list of candidate courses',
    '(id, code, title, when, credits, seats, evals as percent of students saying the course advanced their understanding / increased interest, blurb, fitsWeek).',
    `Pick the ${n} courses that best serve the goal. Strongly prefer fitsWeek=true and open seats; weigh evals; respect every constraint the goal states (time of day, workload, topic, credits, campus).`,
    'Use only ids from the list. Each reason is ONE sentence, written to the student as "you", and must do two things:',
    '(1) name the specific part of THEIR goal this course serves, in their words where possible; (2) cite at least one concrete fact from the data for that course: a workload or understanding percentage, seat status, meeting time, or credits.',
    'If the goal asks for low workload, lead with the workload percentage. If it asks about time of day, lead with the meeting time. Never restate the course description as the reason. No fluff, no "aligns with".',
    'The summary is one sentence telling the student how you read their goal and which constraint drove the ranking.'
  ].join(' ');
  const user = JSON.stringify({ goal, schedule, candidates });

  const errors = [];
  for (const model of MODELS) {
    try {
      const { parsed, model: used } = await callOpenAI(model, key, system, user);
      const ids = new Set(candidates.map(c => c.id));
      const picks = (parsed.picks || []).filter(p => ids.has(p.id)).slice(0, n);
      res.status(200).json({ picks, summary: parsed.summary || '', model: used });
      return;
    } catch (e) {
      errors.push(`${model}: ${e.message}`);
      // Only fall through on "model not found"-style 400/404; anything else is not fixed by another model.
      if (!(e.status === 404 || (e.status === 400 && /model/i.test(e.body || '')))) break;
    }
  }
  res.status(502).json({ error: 'model call failed', detail: errors });
}
