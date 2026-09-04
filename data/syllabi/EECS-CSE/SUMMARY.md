# EECS/CSE Syllabus Collection — Session Summary

Session date: 2026-09-04

## Counts by confidence level

| Confidence | Count | Courses |
|---|---|---|
| syllabus | 7 | EECS 489, EECS 484, EECS 442, EECS 493, CSE 585, EECS 582, EECS 201 |
| listing only | 4 | EECS 445, EECS 280, EECS 485, EECS 467 |
| course page | 0 | — |
| **Total** | **11** | |

## Courses covered (11)

| Code | Title | Term | Confidence | Source repo |
|---|---|---|---|---|
| EECS 201 | Computer Science Pragmatics | Fall 2018 (archived predecessor "C4CS") | syllabus | c4cs/c4cs.github.io |
| EECS 280 | Programming and Introductory Data Structures | (undated tooling repo) | listing only | eecs280staff/tutorials |
| EECS 442 | Computer Vision | Winter 2024 | syllabus | eecs442/eecs442.github.io |
| EECS 445 | Introduction to Machine Learning | Fall 2016 | listing only | eecs445-f16/umich-eecs445-f16 |
| EECS 467 | Autonomous Robotics Laboratory | Winter 2016 (student fork) | listing only | sajanptl/eecs467 |
| EECS 484 | Database Management Systems | Spring 2026 (sp26 half-term) | syllabus | eecs484db/eecs484db.github.io |
| EECS 485 | Web Systems | (undated) | listing only | eecs485staff/madoop |
| EECS 489 | Computer Networks | Winter 2025 | syllabus | mosharaf/eecs489 |
| EECS 493 | User Interface Development | Fall 2026 | syllabus | eecs493staff/eecs493staff.github.io |
| EECS 582 | Advanced Operating Systems | Winter 2022 | syllabus | efeslab/eecs582 |
| CSE 585 | Advanced Scalable Systems for Agentic AI | Winter 2026 | syllabus | mosharaf/cse585 |

Each course has a `<CODE>.json` (schema per task spec) and a `<CODE>.txt` (raw source text, up to 20,000 chars) in this directory. One line was appended to `_index.jsonl` per course as it was completed.

## Courses searched but NOT found (no usable public repo located)

- **EECS 281** (Data Structures and Algorithms) — org `eecs281staff` confirmed to exist (search hits for `eecs281staff.github.io/eecs281.org/syllabus.html`), but every guessed repo name (`eecs281staff.github.io`, `tutorials`, `p1-lc`, `eecs281.org`) returned 404 on raw.githubusercontent.com across `main`/`master`/`develop`/`gh-pages`.
- **EECS 285** (Practical Programming in Java) — same failure pattern for `eecs285/eecs285.org`, `eecs285/eecs285.github.io`.
- **EECS 376** (Foundations of Computer Science) — org exists (`eecs376/issues` is a real public issues-only repo confirming the org), but the actual site repo (`website`, `eecs376.github.io`, `notes`) could not be resolved.
- **EECS 370** (Intro to Computer Organization) — org `eecs370` confirmed real (`eecs370/student-tools`, `eecs370/piazza_bot` exist and were checked), but `student-tools` README was too thin (one line) to justify a course record; main site repo not found.
- **EECS 490** (Programming Languages) — despite a working `amirkamil.github.io/eecs490.org/` page and an `eecs490.github.io` organization, no matching repo/branch/path combination returned content.
- **EECS 470** (Computer Architecture) — `EECS-470` GitHub org exists but holds only private per-team student repos; no public course-content repo found (tried multiple guessed names and one personal fork `mattame/eecs470`, both 404).
- **EECS 373 / EECS 473** (Embedded Systems) — only student project repos and blocked `umich.edu`/personal-page syllabi found; no course-authored repo.
- **EECS 481** (Software Engineering, Kevin Leach / Westley Weimer) — course site is `eecs481.org`; no backing GitHub repo located under `eecs481staff`, `kleach`, or `weimerw`.
- **EECS 388** (Computer Security) — `EECS388` GitHub org exists but only forwards to `eecs388.org`; no content-bearing repo resolved (many results are unrelated student repos).
- **EECS 482** (Operating Systems) — `EECS 482` GitHub org referenced in search results but no resolvable content repo.
- **EECS 491** (Distributed Systems) — org `umich-distsys` found but no resolvable repo/branch.
- **EECS 492 / EECS 592** (Artificial Intelligence) — only personal-page (`web.eecs.umich.edu`, blocked) and student solution repos found.
- **EECS 495 / EECS 496 / EECS 498 (various topics, e.g. Deep Learning for CV, NLP)** — official sites are all under blocked `web.eecs.umich.edu` personal pages; only unofficial student-solution mirrors exist on GitHub (not used, per instructions to prefer official sources).
- **EECS 441, 448, 449, 453, 494, 497, 545, 551, 595** — searched; only blocked personal/`umich.edu` pages or unofficial student repos found, no official GitHub-hosted syllabus.

## Key technical finding (for the next run)

Many UMich EECS course sites live at `https://<org>.github.io/<name>/` and resolve fine in a browser, but the underlying git repository is not reachable via `git clone`/`git ls-remote` (fails with `fatal: could not read Username`, i.e. anonymous-auth-required) or via `raw.githubusercontent.com` (404) for a large fraction of the "staff" orgs: confirmed unreachable for `eecs280staff`, `eecs281staff`, `eecs485staff`'s own site repo, `eecs376`, `eecs285`, `eecs490`, `eecs370`'s site repo — despite the orgs themselves being real (each has at least one other repo that is reachable, e.g. `eecs280staff/tutorials`, `eecs485staff/madoop`, `eecs376/issues`, `eecs370/student-tools`). Root cause is unclear — possibly these specific "org homepage" repos are private with Pages set to public, or GitHub is rate-limiting/blocking anonymous git access to these specific popular repos through this proxy. Recommendation for a follow-up run: retry `git clone` (not just raw.githubusercontent HEAD checks) on these exact repos after a delay, since sanity checks (`octocat/Hello-World`, `mosharaf/eecs489`) always worked, suggesting it isn't a blanket proxy block.

Working patterns confirmed this session (for the next run to prioritize):
1. Personal professor repos with the syllabus directly in `README.md` (e.g. `mosharaf/eecs489`, `mosharaf/cse585`, `efeslab/eecs582`) — most reliable, richest data.
2. Non-"staff" org Pages repos named `<org>/<org>.github.io` with content in `docs/` (e.g. `eecs442/eecs442.github.io`, `eecs484db/eecs484db.github.io`) — reliable.
3. `<staff-org>/<staff-org>.github.io` with a `docs/<coursecode>.org/` subfolder — worked once (`eecs493staff`) but failed for `eecs280staff`/`eecs281staff`/`eecs485staff`/`eecs481staff` despite the identical naming convention — inconsistent, worth a retry.

## Repos successfully cloned and processed this session

mosharaf/eecs489, eecs484db/eecs484db.github.io, eecs445-f16/umich-eecs445-f16, eecs280staff/tutorials, eecs442/eecs442.github.io, eecs493staff/eecs493staff.github.io, mosharaf/eecs598 (superseded by cse585, not used directly), mosharaf/cse585, efeslab/eecs582, c4cs/c4cs.github.io, sajanptl/eecs467 (all deleted after extraction per instructions to keep disk usage low). Fetched via raw.githubusercontent.com without a full clone: eecs485staff/madoop (README only).

## Time/scope

Worked well within the 90-minute / 60-course budget (stopped at 11 courses due to diminishing returns from repo-name guessing rather than time exhaustion). A follow-up run should start by re-attempting `git clone` (not raw HTTP HEAD checks) on the "not found" org list above, and by searching for more individual-professor repos (the single most productive pattern found), e.g. for EECS 388, 481, 491, 470, 545, 592, 595.
