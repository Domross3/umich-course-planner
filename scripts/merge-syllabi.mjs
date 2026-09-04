// Fold data/syllabi/**/<CODE>.json into one skills index the planner can seed from.
// Usage: node scripts/merge-syllabi.mjs  → writes data/skills-index.json and prints counts.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('data/syllabi');
const out = [];
const seen = new Map();
const walk = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) { walk(p); continue; }
    if (!name.endsWith('.json') || name.startsWith('_')) continue;
    let j; try { j = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { console.error('bad json', p); continue; }
    if (!j.code) continue;
    const code = String(j.code).toUpperCase().replace(/\s+/g, ' ').trim();
    const rec = {
      code, title: j.title || '', term: j.term || null, confidence: j.confidence || 'listing only',
      skills: Array.from(new Set((j.skills || []).map(s => String(s).toLowerCase().trim()).filter(Boolean))).slice(0, 15),
      tools: (j.toolsAndLanguages || []).slice(0, 12),
      grading: (j.gradingBreakdown || []).filter(g => g && g.component && typeof g.percent === 'number'),
      workload: j.workloadNotes || null, source: j.sourceRepo || null, tag: 'syllabi sweep · ' + (j.confidence || 'listing only'),
    };
    // keep the highest-confidence record per course
    const wn = String(j.workloadNotes || '').toLowerCase(); const srcStr = String(j.sourceRepo || '').toLowerCase();
    const secondhand = !j.sourceRepo || /websearch|web search/.test(srcStr) || /websearch|web search|not independently fetched|secondhand|not directly fetched/.test(wn);
    if (secondhand) { rec.confidence = 'secondhand'; rec.tag = 'secondhand · not fetched, verify before trusting'; rec.grading = []; }
    const rank = { syllabus: 3, 'course page': 2, 'listing only': 1, secondhand: 0 };
    const prev = seen.get(code);
    if (!prev || (rank[rec.confidence] || 0) > (rank[prev.confidence] || 0)) seen.set(code, rec);
  }
};
walk(root);
for (const rec of seen.values()) out.push(rec);
out.sort((a, b) => a.code.localeCompare(b.code));
fs.mkdirSync('data', { recursive: true });
fs.writeFileSync('data/skills-index.json', JSON.stringify(out, null, 1));
const by = out.reduce((m, r) => (m[r.confidence] = (m[r.confidence] || 0) + 1, m), {});
console.log(JSON.stringify({ courses: out.length, byConfidence: by, withGrading: out.filter(r => r.grading.length).length, skillsTotal: out.reduce((n, r) => n + r.skills.length, 0) }));
