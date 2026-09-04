# Atlas scraper (runs on your Mac)

Atlas requires your U-M login, so this runs locally, not in the cloud.

```bash
cd ~/Downloads/umichcourseplannerstatic
git fetch && git checkout syllabi-sweep && git pull
npm i playwright                 # uses your installed Google Chrome; no browser download
node scripts/scrape-atlas.mjs recon      # 2 min; log in with Duo in the window it opens
git add data/atlas/_recon && git commit -m "atlas recon" && git push
```

Send the word "recon pushed". The parser and the exact course-discovery step get written from those
samples. Then, before bed:

```bash
caffeinate -dimsu -t 36000 &
node scripts/scrape-atlas.mjs discover   # builds data/atlas/codes.txt
node scripts/scrape-atlas.mjs scrape     # ~3 s per course; 8,000 courses ≈ 7 h; Ctrl-C and rerun to resume
```

Morning: `git add data/atlas && git commit -m "atlas sweep" && git push`.

Notes: `ATLAS_DELAY_MS=5000` slows it down if Atlas throttles (the script already sleeps 10 min on a
throttle and resumes). Everything is saved raw (page text, HTML, and every JSON endpoint Atlas's own
frontend calls), so nothing is lost if the page layout differs from what we expect.
