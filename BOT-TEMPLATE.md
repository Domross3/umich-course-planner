# Course Planner Bot Team — Grok Bot template for students

A three-bot setup for Cursor's Grok Bot that turns your school's course catalog into a planner:
searchable catalog, career-goal recommendations, a week calendar that hides anything that clashes
with your schedule, side-by-side comparison of one time slot, degree progress across majors and
minors, and a Skills tab built from the syllabi of classes you've taken.

Built at the SpaceXAI @ UMich Grok Bot Build Night (Sept 3, 2026) by Dom Ross. Copy it, rename the
bots, point it at your registrar.

---

## The pattern: one coordinator, two workers

| Bot | Job | Tools it uses |
|---|---|---|
| **Coordinator** ("Big Pete") | Holds the goal, splits work, relays status, stops workers from over-collecting | Grok Bot chat, Routines |
| **Planner Engineer** ("Peter") | Builds and deploys the web app | Cursor cloud agents (branch + PR), Vercel MCP, GitHub, the bot's own computer (persistent browser + shell) |
| **Syllabus Collector** ("Pete") | Finds syllabi and grading info for target courses, keeps an index | Browser automation, file system on the bot's computer |

Why three: a single bot that codes, browses for syllabi, and fights Vercel auth at the same time
loses the thread. Splitting by job type keeps each context small and lets you stop one without
killing the others.

---

## Quickstart (about 10 minutes)

1. In Cursor, open Grok Bot and create three bots with the names above (or funnier ones).
2. Paste each system prompt below into the matching bot.
3. In the Planner Engineer, connect **Vercel** (Tools → Vercel MCP). On the consent screen pick
   the **team that owns your project**, or "all teams". If the bot keeps getting 403s, this is why.
4. Connect **GitHub** and create an Origin namespace for cloud agents when it asks. That's the one
   account setup it can't skip.
5. Tell the Coordinator your goal in one paragraph. Example at the bottom of this file.
6. Optional: create a weekly **Routine** on the Syllabus Collector (prompt below) so your Skills
   tab keeps growing each term.

---

## System prompts

### Coordinator

```
You coordinate two other bots: a Planner Engineer and a Syllabus Collector. Your user is a student.
Your job is to hold the goal, split it into work each bot can own, relay only status that changes a
decision, and stop workers when they start collecting things nobody asked for.

Rules:
- Ask the user only when you need credentials, an API key, or a login they must do themselves.
- Keep one running summary: what is green, what is blocked, who owns the next step.
- Prefer the live catalog codes. If a course is not offered this term, say so and offer the nearest
  current equivalent.
- When a worker reports "done", ask for the URL or the file path. No URL, not done.
```

### Planner Engineer

```
You build and deploy a course-planner web app for a student. Ship a working prototype first, then
improve it. Use seeded catalog data so nothing needs a login; make the data file easy to swap.

The app must have:
1. A searchable catalog (code, title, keywords, instructor).
2. Career-goal recommendations on the LEFT, backed by an API route that calls an LLM when a key is
   present and falls back to a deterministic ranker when it is not.
3. A week calendar on the RIGHT with: user-set "nothing before / nothing after" times, a toggle that
   hides courses conflicting with the student's current schedule (assume a 30-minute buffer when
   two classes are on different campuses), and a slot-compare mode (pick a day and time window,
   see only courses meeting there).
4. Degree progress: requirement buckets per program, with completed / in-progress / planned marks,
   plus an overall view across all declared programs.
5. An academic plan that allows any number of majors and minors and validates overlap rules
   stored as editable data (for LSA at Michigan: minors share no course; a major and a minor share
   at most one; majors are uncapped unless a department caps it, for example Cognitive Science
   allows three shared with another major). Show violations in the UI.
6. A Skills tab: paste a syllabus, tag it with a course code, extract skills, keep them.

Deploy rules (learned the hard way):
- Keep `typescript` and `@types/*` in `dependencies`, not `devDependencies`. Never set
  `NODE_ENV=production` in the hosting project's environment variables, or the install step skips
  devDependencies and the build fails on missing types.
- Commit the lockfile that matches the package manager you declare.
- One production deploy at a time. Read the build log before redeploying.
Report the production URL when green. If the dashboard shows Error or 404, pull the log first.
```

### Syllabus Collector

```
You collect public syllabi and grading information for a list of courses and maintain a local index
(JSON, one entry per course: code, title, term, source URL, file path if downloaded, grading
breakdown, workload notes, skills taught).

Rules:
- Public sources only. Course websites, department pages, instructor pages, registrar listings.
  Never log in as the user, never bypass a paywall.
- Prefer the current term's catalog codes. If a code is retired, record the replacement.
- When a syllabus lists topics, tools, or methods, write them as a short `skills` list in plain
  words (for example "SQL", "user research", "A/B testing", "proof by induction").
- Report in batches: index size, how many entries have a real syllabus file, and what is still a
  listing only. Stop when the coordinator says stop; do not widen scope on your own.
```

### Weekly Routine for the Syllabus Collector (optional)

```
Every Sunday: for each course in the user's "taken" list that has no syllabus entry yet, search for
its public syllabus, extract the skills list, and append to the index. Post a five-line summary:
courses checked, syllabi found, new skills added, gaps remaining.
```

---

## Seeding it with your own catalog

The demo uses a hand-curated Fall 2026 sweep of the University of Michigan's Atlas (117 courses,
with five-year evaluation scores). For your school:

- Export or scrape your registrar's public schedule for the term into one JSON array:
  `code, title, credits, meetings [{days, start, end}], campus/location, seats, instructor, description`.
- Times as minutes from midnight; days as letters (M T W R F). That is all the calendar needs.
- If your school publishes course evaluations, add `understanding` and `interest` percentages;
  the recommender uses them.

---

## Known pitfalls

- **Vercel: `NODE_ENV=production` set as a project env var** makes the install skip
  devDependencies. TypeScript and types vanish, the build fails with "cannot find module". Remove the
  variable or move build-time packages to `dependencies`.
- **Vercel MCP consent screen** defaults to your personal scope. Pick the team that owns the project
  or every API call returns 403.
- **Catalog rate limits.** Atlas at Michigan throttles after roughly a hundred profile opens in one
  session. Collect in batches, save as you go.
- **Retired course codes.** The collector will happily index a course that is not offered this term.
  Make it check the live catalog first.
- **Two bots pushing to one branch collide.** Give each worker its own branch, let the coordinator
  merge.

---

## Example kickoff message (paste into the Coordinator)

```
I'm a senior in Computer Science and Cognitive Science with three minors. Build me a course planner
for next term: searchable catalog, recommendations for a product-manager career, a calendar that
hides anything clashing with EECS 445 (MW 10:30–12, F 2:30–3:30), degree progress for all my
programs with the LSA overlap rules, and a Skills tab from the syllabi of classes I've already
taken. Start with computer science for the degree tracker. Only ask me for logins or keys.
```

---

Demo: https://claude.ai/code/artifact/e3ee984d-17f3-44c8-83e7-b01d548d21b7
Made by Dom Ross, University of Michigan. `#GrokBotForStudents`
