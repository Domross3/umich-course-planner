## Progress update
Time: 2026-09-04 (session start)
Courses done so far (6): EECS 489, EECS 484, EECS 445, EECS 280, EECS 442, EECS 493
Last course: EECS 493
Repos that failed to resolve (guessed names that don't exist / 401 on git or 404 on raw):
- eecs376/website, eecs376/eecs376.github.io (EECS 376 Foundations of CS)
- eecs285/eecs285.org, eecs285/eecs285.github.io (EECS 285)
- eecs485staff/eecs485.org (EECS 485 - main site; org exists, this exact repo name doesn't)
- eecs490/eecs490.org (EECS 490)
- eecs280staff/eecs280.org, eecs280staff/eecs280runestone (EECS 280 main site - README fetch failed/401)
- eecs370/eecs370.github.io (EECS 370)
- EECS-470 org repos are private (student team repos); no public course-content repo found by guessing
Key finding: many "OWNER.github.io/coursename.org/" pages are actually a SUBFOLDER named "coursename.org" inside the repo "OWNER/OWNER.github.io" (published from /docs), not a separate repo. Confirmed for eecs493staff. Should re-check eecs485staff, eecs490, eecs376, eecs285, eecs280staff this way next.

## Progress update 2
Courses done so far (10): EECS 489, EECS 484, EECS 445, EECS 280, EECS 442, EECS 493, CSE 585, EECS 582, EECS 201, EECS 485
New finding: "eecsNNNstaff"/"eecsNNN.github.io" main-site repos are largely unreachable via raw.githubusercontent.com AND git clone (401/404) for eecs280staff, eecs281staff, eecs485staff, eecs376, eecs285, eecs490, eecs370 despite live, cached GitHub Pages sites at those exact URLs. Root cause unclear (possibly non-standard Pages deploy from a private/differently-named source repo, or GitHub anti-scraping on high-traffic orgs). eecs493staff, eecs484db, eecs442, and personal-professor repos (mosharaf/*, efeslab/eecs582) work fine.
Best remaining strategy: search for personal/professor GitHub accounts hosting course README-as-syllabus (very reliable pattern) rather than "staff.github.io" org pages.

## Round 2
- Found goldmine repo PeterQiu0516/UMich-Syllabus-Collection (public, git-clonable) containing scanned PDF syllabi for many EECS courses. PDFs are image-only (Foxit print-driver export, vector-path text with empty content streams / no embedded fonts) — required installing ghostscript + tesseract-ocr + pillow/cffi to rasterize each page and OCR it.
- Completed via OCR: EECS 281, EECS 285, EECS 370, EECS 376, EECS 482 (5 courses, all confidence=syllabus).
- Continued OCR pipeline through remaining relevant PDFs in the same repo: EECS 486, EECS 492, EECS 497 (ENGR455/MDP cross-list), EECS 498-004 (Intro to NLP), EECS 598-007 (Adversarial ML), EECS 598-012 (Unsupervised Visual Learning). Running total this round: 11 new courses (281, 285, 370, 376, 482, 486, 492, 497, 498-004, 598-007, 598-012).
- Found EECS 595 syllabus (also cross-listed EECS 498.007) and bonus EECS 487 (Fall 2023, Laura Burdick) via laura-burdick/laura-burdick.github.io repo. Added EECS 545 (listing only, lecture list + textbooks, no grading) via liangtianumich/umich-eecs545-lectures. Running total this round: 14 new courses.
- Added EECS 388 (listing only, lecture-slide filenames from Umich-CS/eecs-388) and EECS 470 (course page, project specs from jieltan/OpenCompArchCourse, incl. term-project grading breakdown). Running total this round: 16 new courses.
- Added EECS 441 (listing only, eecs441soloway/eecs441soloway.github.io wiki repo) and EECS 592 (listing only, cross-listed with 492, y-shi/EECS592W17 student repo with homework PDFs confirming instructor Ed Durfee, Winter 2017). Running total this round: 18 new courses.
- Added EECS 587 and EECS 491 as "listing only" using WebSearch-summarized (secondhand, not directly fetched — source domains blocked) course info, clearly caveated in workloadNotes. Running total this round: 20 new courses.
- Added EECS 494 (listing only, via UMich-EECS-resources wiki repo) and EECS 589 (full syllabus, forkjoseph/EECS589 repo — Advanced Computer Networks, Winter 2019, Prof. Peter Honeyman, complete 29-week paper-reading schedule). Running total this round: 24 new courses.
- Added EECS 498-016/598-016 (full syllabus, um-graphics/um-graphics.github.io — Computer Graphics and Generative Models, Winter 2026, Jeong Joon Park). Running total this round: 25 new courses.
- Added EECS 598-004 (Systems for Generative AI, W24) and EECS 598-009 (Systems for AI, W21), both full syllabi from mosharaf/eecs598 repo's per-term branches (proven-reliable professor-repo pattern, confirms multiple distinct special-topics sections coexist in one repo via branches). Running total this round: 27 new courses.
- Added EECS 498-007/598-005 (Deep Learning for Computer Vision, Justin Johnson, Fall 2019 lecture list) via student repo Andrew-Ng-s-number-one-fan/EECS498-Deep-Learning-for-Computer-Vision — listing only, no grading breakdown recovered. Running total this round: 28 new courses.
