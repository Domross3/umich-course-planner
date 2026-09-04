# OTHER (non-EECS/CSE) syllabus collection — run summary

Run date: 2026-09-04
Total courses captured: 24 (of 60 cap; stopped before 90 min by diminishing search returns, not by hitting the cap)

## Counts by confidence level
- syllabus (real grading breakdown / schedule / logistics): 10
- course page (official/instructor repo, real weekly topics/notebooks, no explicit grading %): 7
- listing only (real repo content but topics/skills inferred from file/assignment names, not syllabus prose): 7

## Courses covered (24)

| Code | Title | Confidence | Source repo |
|---|---|---|---|
| ROB 101 | Computational Linear Algebra | course page | michiganrobotics/rob101 |
| ROB 102 | Introduction to AI and Programming | syllabus | robotics102/robotics102.github.io |
| ROB 201 | Calculus for the Modern Engineer | syllabus | michiganrobotics/rob201 |
| ROB 311 | How to Build Robots and Make Them Move | syllabus | michiganrobotics/rob311 |
| ROB 501 | Mathematics for Robotics | syllabus | michiganrobotics/rob501 |
| ROB 530 | Mobile Robotics: Methods & Algorithms | syllabus | UMich-CURLY-teaching/UMich-ROB-530-public |
| SI 206 | Data-Oriented Programming | listing only | cvanlent/Archived-Course |
| SI 330 | Data Manipulation | course page | umsi-data-science/si330-2018 |
| SI 370 | Data Exploration | course page | umsi-data-science/si370 |
| SI 506 | Programming I (Using Python) | listing only | umsi-arwhyte/SI506-practice |
| SI 507 | Intermediate Programming | listing only | cginiel/si507 |
| SI 579 | Building Interactive Applications for the Web | listing only | soney/si-579 |
| SI 618 | Data Manipulation and Analysis | course page | umsi-data-science/si618wn2019 |
| SI 649 | Information Visualization | listing only | twho/Info-visualization-project |
| STATS 250 | Introduction to Statistics and Data Analysis | listing only | stevenschmatz/STATS-250 |
| STATS 306 | Introduction to Statistical Computing | syllabus | markmfredrickson/stats306_spring_2023 |
| STATS 401 | Applied Statistical Methods II | syllabus | ionides/401w18 |
| STATS 415 | Data Mining and Statistical Learning | course page | xinyexu/STATS-415 |
| STATS 507 | Data Science in Python | course page | jbhender/Stats507_F21 |
| DATASCI 306 | Intro to Statistical Computing (cross-list STATS 306) | syllabus | markmfredrickson/stats306_spring_2023 |
| DATASCI 315 | Introductory Deep Learning (cross-list STATS 315) | syllabus | ambujtewari/stats315-winter2023 |
| ECON 402 | Intermediate Macroeconomics | course page | richryan/econ402 |
| CMPLXSYS 270 | Introduction to Agent-Based Modeling | listing only | iamttc/cmplxsys270 |
| CMPLXSYS 530 | Computer Modeling of Complex Systems | syllabus | lynetteshaw/cscs-530-wi2019 |

Subjects with zero hits this run: COGSCI, PSYCH, PHIL, MATH, ENTR, ES (subject code not confirmed to exist at UMich), STRATEGY, MO, MKT, FIN, TO, BA, LING, PUBPOL, IOE, ENGR.

## Courses searched but not found on GitHub (2 searches each)
- MATH 371, 462, 217, 214, 216, 316
- LING 111, 210
- PUBPOL 475, 550
- IOE 265, 373, 296, 310, 411, 510
- PSYCH 240, 250, 280, 613, 614
- PHIL 340, 296
- ENTR 390, 411
- Ross School: BA 100/453, TO 313/431, MO 300, MKT, FIN, STRATEGY — no GitHub presence found for any Ross course
- ECON 101, 102
- COGSCI 200, 300
- ENGR 100/101 — org `engin100` and pages site `engr101staff.github.io/engr101.org` exist per search snippets, but converted repo `engr101staff/engr101.org` failed `git ls-remote` ("could not read Username") — not pursued further

## Repos that failed
- `richryan/econ401` — git ls-remote failed ("could not read Username"); used sibling repo `richryan/econ402` instead (worked)
- `jbhender/stats507` / `jbhender/Stats507` (case variants) — failed; correct repo is `jbhender/Stats507_F21`
- `engr101staff/engr101.org` — failed, not retried
- `umsi-mads/website`, `robotics102/rob102`, `robotics102/website` — failed ls-remote, not pursued (had working alternatives)

## Notable leads for a follow-up run
- **michiganrobotics** GitHub org: every repo attempted this run (rob101, rob201, rob311, rob501, rob530-adjacent) yielded rich "syllabus"-level READMEs. Untried repos: rob301, rob310, rob320, rob401, rob405, rob422, rob450, rob502, rob550. Highest-value org to mine next.
- **umsi-data-science** org has more repos beyond si330/si370/si618 (big-data-workshop, NP_chunking_with_nltk, tap, goodbooks-10k) — check if any map to specific SI course numbers.
- **umsi** GitHub org (github.com/umsi) exists, not explored this run.
- Untried SI numbers: SI 501, 508, 601, 602, 622, 664, 665, 539, 544, 545, 550, 552, 561.
- Untried STATS: 412, 413, 500, 503, 506, 531.
- Untried DATASCI: 301, 401, 451.
- ROB 550 has a docs site `rob550-docs.github.io` (convert to `rob550-docs/rob550-docs.github.io`) and student repo `saptadeb/botLab` — not yet pulled.
- CMPLXSYS 361, 470, 510 not yet searched.

## Method notes for next run
- github.io → repo conversion (owner.github.io/repo → github.com/owner/repo) works reliably, but 3 cases this run got "could not read Username for 'https://github.com'" on `git ls-remote` (richryan/econ401, engr101staff/engr101.org, jbhender/stats507 exact-case) despite the underlying content clearly existing per search results — try a raw.githubusercontent.com HEAD/README fetch as a cheaper existence check before giving up, and try case variants of the repo name.
- Notebook-only repos (umsi-data-science org) have no README prose but reliable weekly-topic sequences encoded in notebook filenames (e.g. `330_05_Groupby_pivot.ipynb`).
