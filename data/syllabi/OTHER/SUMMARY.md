# OTHER (non-EECS/CSE) syllabus collection — run summary

Run date: 2026-09-04
Total courses captured: 50 as of end of Round 2 (24 in Round 1 + 26 in Round 2; see "Round 2" section below for that run's detail)

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

## Round 2

Run date: 2026-09-04 (same day, ~85 min session; stopped by diminishing-returns/time, not the 40-course cap)
New courses added this run: 26 (24 → 50 total in `_index.jsonl`)

### Counts by confidence level (round 2 additions only)
- syllabus (real grading breakdown and/or full weekly schedule): 20
- course page (real syllabus-adjacent content, no full grading %): 3
- listing only (real repo content, topics/skills inferred from filenames): 3

### Courses added this round (26)

| Code | Title | Confidence | Source repo |
|---|---|---|---|
| ROB 550 | Robotic Systems Laboratory | course page | rob550-docs/rob550-docs.github.io |
| ROB 204 | Introduction to Human-Robot Systems | syllabus | michiganrobotics/rob204 |
| STATS 506 | Computational Methods and Tools in Statistics | listing only | jbhender/Stats506_F20 |
| STATS 503 | Multivariate Analysis | listing only | rogerfan/stats503_w17_labs |
| STATS 531 | Modeling and Analysis of Time Series Data | syllabus | ionides/531w24 |
| DATASCI 531 | (cross-list STATS 531) | syllabus | ionides/531w24 |
| STATS 451 | Bayesian Data Analysis | syllabus | danieliong/stats451 |
| DATASCI 451 | (cross-list STATS 451) | syllabus | danieliong/stats451 |
| SI 664 | Database and Information Systems Design (Django/MySQL) | course page | arwhyte/SI664-docs |
| DATASCI 415 | (cross-list STATS 415) | course page | xinyexu/STATS-415 |
| DATASCI 507 | (cross-list STATS 507) | course page | jbhender/Stats507_F21 |
| STATS 504 | Capstone Seminar in Statistics (masters) | syllabus | kshedden/case_studies |
| STATS 485 | Capstone Seminar in Statistics (undergrad, ULWR) | syllabus | kshedden/case_studies |
| STATS 604 | Statistical Practice (PhD) | syllabus | kshedden/case_studies |
| STATS 701 | Special Topics: Theory of Reinforcement Learning | syllabus | ambujtewari/stats701-winter2021 |
| STATS 607A | Computing in Statistics | listing only | ambujtewari/stats607a-fall2014 |
| STATS 700 | Special Topics: Theory of LLM Reasoning | syllabus | ambujtewari/LT-fall2025 |
| STATS 425 | Introduction to Probability (cross-list MATH 425) | syllabus | ambujtewari/ambujtewari.github.io |
| STATS 605 | High Dimensional Statistics | syllabus | ambujtewari/ambujtewari.github.io |
| STATS 608A | Optimization Methods in Statistics | syllabus | ambujtewari/ambujtewari.github.io |
| STATS 710 | Sequential Decision Making with mHealth Applications | syllabus | ambujtewari/ambujtewari.github.io |
| ECON 678 | Advanced Econometrics I | syllabus | hgmn/hgmn.github.io |
| ECON 679 | Advanced Econometrics II | syllabus | hgmn/hgmn.github.io |
| ECON 672 | Econometric Analysis II | syllabus | hgmn/hgmn.github.io |
| IOE 510 | Linear Programming I (cross-list MATH 561, TO 518) | syllabus | PeterQiu0516/UMich-Syllabus-Collection |
| ENGR 455 | Multidisciplinary Software Development (cross-taught EECS 497) | syllabus | PeterQiu0516/UMich-Syllabus-Collection |

### Leads that worked spectacularly (the big lesson of this round)
A professor's **personal `github.io` site itself** (the Jekyll/static-site source repo, not just their separately-named course repos) frequently contains full syllabus HTML/PDF under a `teaching/` or `assets/` path — this was far higher-yield than searching for `<subject><number>` repo names directly:
- `ambujtewari/ambujtewari.github.io` → real syllabus pages for STATS 425, 605, 608A, 710 (on top of his standalone repos for 306, 315, 607A, 701, 700/LT-fall2025)
- `hgmn/hgmn.github.io` (Andreas Hagemann, Econ) → PDF syllabi for ECON 672, 678, 679, all with full grading breakdowns
- `PeterQiu0516/UMich-Syllabus-Collection` (a student's *personal syllabus archive*, previously dismissed in Round 1 as "mainly EECS" from its README alone) actually contains real non-EECS PDFs too: IOE 510 and ENGR 455 — **lesson: always list a repo's actual files, don't judge by the README summary alone.**
- `kshedden/case_studies` (Kerby Shedden, Stats) is shared infrastructure across three courses (STATS 485, 504, 604) each with its own real `syllabus.md`/`syllabus.pdf` plus a common bank of real-world case-study datasets (NHANES, RLMS, actigraphy, COVID, mortality, etc.) usable for weeklyTopics context on all three.

### Leads that failed this round
- `michiganrobotics` org: rob301/310/320/401/405/422/450/502 confirmed **genuinely nonexistent** (both `git ls-remote` and raw README 404 agree — not a false negative this time). Org's only course repos are rob101, rob201, rob204, rob311, rob501 (+ rob530 lives in a separate org, rob102 in `robotics102` org, rob550 in `rob550-docs` org). This org is now fully mined.
- `umsi-data-science` org: si501/508/601/602/622/664/665/539/545/550/552/561 all nonexistent under that org (664 exists but under `arwhyte`, a different owner). `si544-fa2020` exists but is a single notebook with no syllabus content — too thin even for "listing only".
- `SI539` GitHub org exists (tutorials/handouts repos for "Design of Complex Websites") but content is only tool-setup instructions, no topics/grading — too thin.
- IOE and MECHENG/AEROSP/NAVARCH faculty use Google Sites or umich.edu-hosted pages almost exclusively, not GitHub Pages — near-zero organic GitHub presence found again this round (IOE 510 was only found via the syllabus-collection repo, not a faculty repo).
- BIOSTAT: `adw96/biostat561` looked promising but is a **University of Washington** course (not UMich) — verify institution before use, a plausible-sounding repo can be the wrong school entirely.
- PHYSICS 411 (Mark Newman, Computational Physics): real UMich course, but only hosted on umich.edu (blocked); GitHub hits are all third-party textbook-solution repos unaffiliated with the actual UMich course structure.
- CMPLXSYS 361/470/501/510/511, DATASCI 301/401, STATS 412/413/500/502 (JasmineMou repos too thin — just homework PDFs, no syllabus): no usable GitHub content found.
- `kingaa/clim-dis` (Aaron King, EEB/CMPLXSYS) is an ICTP international workshop repo, not tied to a specific UMich course number — not usable.

### New leads for a Round 3
- Apply the "check the professor's own `<name>.github.io` source, not just linked repos" technique systematically to more UMich STATS/ECON/CS-adjacent faculty (works ~50% of the time when a personal academic site exists in Jekyll/plain-HTML form).
- `kshedden` (Kerby Shedden) has 113 repos total — only `case_studies` and `umstats504` were explored; worth a fuller sweep.
- Untried STATS numbers with real UMich courses per catalog: 500, 502, 511, 610, 620, 426. STATS 500 (`JasmineMou/STATS500`) has 9 homework PDFs but no syllabus text — would need PDF-by-PDF extraction to see if it clears the bar.
- ECON 671 (first course of the PhD sequence, prerequisite to 672/678/679) not found — worth one more targeted search for the instructor.
- DATASCI 413 (cross-listed STATS 413, Applied Regression) — course confirmed to exist (Yuekai Sun teaches it) but no GitHub repo found; only umich.edu-hosted notes.
