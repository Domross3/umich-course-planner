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
