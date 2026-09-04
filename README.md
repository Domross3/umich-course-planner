# Wolverine Course Planner — #GrokBotForStudents

A course planner for University of Michigan students, built by a three-bot Grok Bot team at the
SpaceXAI @ UMich Build Night (Sept 3, 2026).

**Live:** https://umich-course-planner.vercel.app · **Bot template:** [BOT-TEMPLATE.md](BOT-TEMPLATE.md) (also at [/template](https://umich-course-planner.vercel.app/template))

## What it does
- Searchable catalog: 117 Fall 2026 courses swept from Atlas, with five-year evaluation scores
- Career-goal recommendations ("product manager", "ML engineer", …) ranked with the reason for each
- Week calendar that hides anything clashing with your schedule (30-minute buffer across campuses),
  user-set "nothing before / after" times, and a slot-compare mode
- Degree progress across any number of majors and minors, with LSA overlap rules encoded as data
- Skills tab: paste a syllabus, get the skills it taught you, tagged to the course

## Layout
- `index.html` — the whole app, one static file (catalog data embedded)
- `template/index.html` — the Grok Bot template rendered as a page
- `BOT-TEMPLATE.md` — the template source: three bots, their system prompts, tools, setup, pitfalls
- `vercel.json` — static deploy (`framework: null`); no build step

## Run locally
Open `index.html` in a browser. That's it.

## Caveats
Degree-requirement numbers come from program pages and are marked unverified in the UI; confirm with
an advisor. Seat counts are an Aug 23–24 2026 snapshot.
