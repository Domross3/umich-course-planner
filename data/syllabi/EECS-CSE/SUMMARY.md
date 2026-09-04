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

## Round 2

### Counts by confidence (28 new courses)

| Confidence | Count |
|---|---|
| syllabus | 17 |
| course page | 1 |
| listing only | 10 |
| **Total new** | **28** |

### Courses added (28)

| Code | Title | Confidence | Source |
|---|---|---|---|
| EECS 281 | Data Structures and Algorithms | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 285 | Practical Programming in Java | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 370 | Introduction to Computer Organization | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 376 | Foundations of Computer Science | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 482 | Introduction to Operating Systems | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 486 | Information Retrieval and Web Search | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 492 | Introduction to Artificial Intelligence | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 497 | Human-Centered Software Design (MDP/ENGR455) | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 498-004 | Introduction to NLP | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 598-007 | Adversarial Machine Learning | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 598-012 | Unsupervised Visual Learning | syllabus | PeterQiu0516/UMich-Syllabus-Collection (OCR) |
| EECS 487 | Intro to Natural Language Processing (Fall 2023) | syllabus | laura-burdick/laura-burdick.github.io |
| EECS 595 | Natural Language Processing | syllabus | laura-burdick/laura-burdick.github.io |
| EECS 589 | Advanced Computer Networks (Winter 2019) | syllabus | forkjoseph/EECS589 |
| EECS 598-004 | Systems for Generative AI (Winter 2024) | syllabus | mosharaf/eecs598 (branch w24-genai) |
| EECS 598-009 | Systems for AI (Winter 2021) | syllabus | mosharaf/eecs598 (branch w21-ai) |
| EECS 498-016/598-016 | Computer Graphics and Generative Models (Winter 2026) | syllabus | um-graphics/um-graphics.github.io |
| EECS 470 | Computer Architecture | course page | jieltan/OpenCompArchCourse |
| EECS 388 | Introduction to Computer Security | listing only | Umich-CS/eecs-388 (lecture filenames only) |
| EECS 441 | Mobile App Development for Entrepreneurs | listing only | eecs441soloway/eecs441soloway.github.io |
| EECS 545 | Machine Learning (Winter 2016) | listing only | liangtianumich/umich-eecs545-lectures |
| EECS 592 | Foundations of AI (cross-listed 492, Winter 2017) | listing only | y-shi/EECS592W17 |
| EECS 373 | Introduction to Embedded System Design | listing only | arschallwig/EECS373_CFS + WebSearch topic list |
| EECS 494 | Computer Game Design | listing only | UMich-EECS-resources/wiki |
| EECS 498-007/598-005 | Deep Learning for Computer Vision (Justin Johnson) | listing only | Andrew-Ng-s-number-one-fan/... (student repo) |
| EECS 587 | Parallel Computing | listing only | WebSearch summary (blocked source) + yipengm/EECS587 |
| EECS 491 | Introduction to Distributed Systems | listing only | WebSearch summary (blocked source) |
| EECS 453 | Principles of Machine Learning | listing only | WebSearch summary (blocked source) |

### Courses searched but NOT found this round

- **EECS 481** (Software Engineering) — official site `eecs481.org` and `dijkstra.eecs.umich.edu/kleach/...` both on blocked domains; no backing GitHub repo found under `eecs481`, `kleach`, `weimerw`, or guessed org names (all either 404/private or just student project code with no syllabus content, e.g. `asadsq/misc-umich-481`).
- **EECS 448 / 449** (Human-Centered ML, Emily Mower Provost) — official site is `emp.engin.umich.edu` (blocked); no GitHub repo located.
- **EECS 473** (Advanced Embedded Systems) — official site blocked; only unrelated student repos found.
- **EECS 490** (Programming Languages) — repeated round-1 finding confirmed: `amirkamil.github.io/eecs490.org` and `eecs490.github.io` exist as rendered sites, but every guessed underlying repo (`amirkamil/eecs490.org`, `eecs490/eecs490.org`, `eecs490/eecs490.github.io`) returns "could not read Username" (private/nonexistent) via git.
- **CSE 587 / 589** as literal course codes — not confirmed to exist separately from `EECS 587`/`EECS 589`, which were found and used instead (UMich cross-lists many EECS grad courses under CSE informally in search results, but no separate "CSE 587" course page was located).

### What worked this round

1. **Goldmine repo**: `PeterQiu0516/UMich-Syllabus-Collection` — a public repo of *scanned PDF* syllabi (Foxit-print-driver exports with no embedded text layer, just vector-outline glyphs and rasterized page content). Recovered text by installing `ghostscript` (rasterize each page to PNG) + `tesseract-ocr` (OCR each page) + `pillow`/`cffi` (fix a broken system `cryptography` import chain that was blocking `pypdf`/`pdfminer`). This single repo yielded 11 of this round's 28 courses, all at full `syllabus` confidence with real grading breakdowns.
2. **Professor/lab GitHub-Pages repos** (confirms round-1 finding): `laura-burdick/laura-burdick.github.io` (syllabus PDFs in `papers/`), `forkjoseph/EECS589` (student-maintained but instructor-linked full syllabus+schedule in README), `mosharaf/eecs598` (multiple full syllabi as **git branches**, one per term/topic — a new pattern: check branches, not just the default branch, on a professor's special-topics repo), `um-graphics/um-graphics.github.io` (new org-owned course site, `docs/index.md`).
3. **GitHub wiki repos as a source type** (new pattern): a repo's wiki is a separate git remote at `https://github.com/OWNER/REPO.wiki.git` — found `UMich-EECS-resources/wiki.wiki` this way, containing an EECS 494 course-description page.
4. **Lecture-slide filename listings** (weak but usable): when no README/syllabus exists, a repo's `Lecture Slides/` directory filenames alone (e.g. `Umich-CS/eecs-388`) can reconstruct a course's weekly-topic sequence — recorded at `listing only` confidence.
5. **WebSearch summaries of blocked official pages** (used cautiously): for EECS 587, 491, and 453, no GitHub repo existed, but WebSearch's cached-page summaries of blocked `*.umich.edu`-family official course pages yielded real (but secondhand/unverified) instructor names, topics, and in two cases grading percentages. Recorded at `listing only` confidence with explicit caveats in `workloadNotes` that the content was not independently fetched — this is a deliberately lower-trust tier than a directly-read file and should be treated skeptically by downstream consumers.
6. **`WebFetch` was not usable**: every non-GitHub domain tried (`fkfd.me`, `adrianstoll.com`) returned `EGRESS_BLOCKED` from the network proxy, not just the documented `*.umich.edu`/`*.github.io` blocks — so this session relied entirely on `git clone`/`git ls-remote` plus WebSearch's own result summaries, never a general-purpose page fetch.

### Time

Approximately 50 minutes of the 75-minute budget used; stopped at 28 new courses (under the 40-course cap) due to diminishing returns on the remaining target list (481, 448, 449, 473, 490) after multiple search strategies each failed to locate a usable public repo or reachable page.
