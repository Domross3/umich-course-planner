#!/usr/bin/env node
// Atlas scraper — runs on YOUR Mac (Atlas needs your U-M login; cloud sessions can't reach it).
//
// Setup (once):   npm i playwright            (uses your installed Google Chrome; no browser download)
// Recon (2 min):  node scripts/scrape-atlas.mjs recon
//                 → a Chrome window opens; log in with Weblogin + Duo if asked; the session is saved
//                   to ~/.atlas-scraper-profile so later runs are headless.
//                 → writes data/atlas/_recon/ (URL map, every JSON endpoint Atlas calls, screenshots)
// Discover:       node scripts/scrape-atlas.mjs discover        → data/atlas/codes.txt (all course codes)
// Scrape:         node scripts/scrape-atlas.mjs scrape          → data/atlas/raw/<CODE>.json, resumable
//                 node scripts/scrape-atlas.mjs scrape --limit 20   (test run)
//                 ATLAS_DELAY_MS=3000 by default (Atlas throttled ~230 fast opens in Aug 2026; be polite)
//                 Ctrl-C any time; rerun resumes. Push the repo in the morning: git add data/atlas && git commit -m atlas && git push
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline';

const MODE = process.argv[2] || 'recon';
const argv = process.argv.slice(3);
const opt = (k, d) => { const i = argv.indexOf(k); return i === -1 ? d : argv[i + 1]; };
const LIMIT = Number(opt('--limit', 0)) || 0;
const CODES_FILE = opt('--codes', 'data/atlas/codes.txt');
const DELAY = Number(process.env.ATLAS_DELAY_MS || 3000);
const BASE = 'https://atlas.ai.umich.edu';
const PROFILE = path.join(os.homedir(), '.atlas-scraper-profile');
const OUT = path.resolve('data/atlas');
const RAW = path.join(OUT, 'raw');
const RECON = path.join(OUT, '_recon');
for (const d of [OUT, RAW, RECON]) fs.mkdirSync(d, { recursive: true });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const now = () => new Date().toISOString();
const log = (...a) => { const line = `[${now()}] ${a.join(' ')}`; console.log(line); fs.appendFileSync(path.join(OUT, 'scrape.log'), line + '\n'); };
const ask = (q) => new Promise(res => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); rl.question(q, a => { rl.close(); res(a); }); });

// Bundled subject list as a fallback for discovery (not exhaustive; discovery also reads Atlas/LSA pages).
const SUBJECTS_FALLBACK = ['AAS','ACC','AERO','AEROSP','ALA','AMCULT','ANTHRARC','ANTHRBIO','ANTHRCUL','ARABIC','ARCH','ARTDES','ASIAN','ASIANLAN','ASTRO','AUTO','BA','BCOM','BCS','BE','BIOINF','BIOLCHEM','BIOLOGY','BIOMEDE','BIOPHYS','BIOSTAT','BL','CEE','CHE','CHEM','CHINESE','CJS','CLARCH','CLCIV','CLIMATE','CMPLXSYS','COGSCI','COMM','COMPFOR','COMPLIT','CSE','CSP','DANCE','DATASCI','DIGITAL','EARTH','ECON','EDUC','EEB','EECS','EHS','ELI','ENGLISH','ENGR','ENS','ENTR','ENVIRON','EPID','ES','ESENG','FIN','FRENCH','FTVM','GERMAN','GREEK','HBEHED','HEBREW','HISTART','HISTORY','HJCS','HMP','HONORS','HS','INTLSTD','INTMED','IOE','ITALIAN','JAPANESE','JUDAIC','KINESLGY','KOREAN','LATIN','LATINOAM','LAW','LHSP','LING','LSA','MACROMOL','MATH','MATSCIE','MCDB','MECHENG','MEMS','MENAS','MFG','MICRBIOL','MIDEAST','MILSCI','MKT','MO','MOVESCI','MUSICOL','MUSTHTRE','NAVARCH','NERS','NEUROSCI','NURS','ORGSTUDY','PAT','PHARMACY','PHIL','PHYSICS','PHYSIOL','POLISH','POLSCI','PORTUG','PSYCH','PUBHLTH','PUBPOL','RCARTS','RCCORE','RCHUMS','RCIDIV','RCLANG','RCNSCI','RCSSCI','REEES','RELIGION','ROB','ROMLANG','RUSSIAN','SAC','SCAND','SI','SLAVIC','SOC','SPACE','SPANISH','STATS','STRATEGY','SW','TCHNCLCM','THEORY','THTREMUS','TO','TURKISH','UARTS','UC','UKR','UP','URP','UT','WGS','WRITING','YIDDISH'];

async function launch(headed) {
  return chromium.launchPersistentContext(PROFILE, { channel: 'chrome', headless: !headed, viewport: { width: 1400, height: 1000 } });
}

// Collect every JSON (and text/plain JSON-looking) response the page makes while we're on it.
function attachCollector(page) {
  const bag = [];
  page.on('response', async (res) => {
    try {
      const ct = (res.headers()['content-type'] || '').toLowerCase();
      const url = res.url();
      if (!/atlas\.ai\.umich\.edu|umich\.edu/.test(url)) return;
      if (!/json|javascript|text\/plain/.test(ct)) return;
      if (/\.(js|css|png|svg|woff2?)(\?|$)/.test(url)) return;
      const body = await res.text().catch(() => '');
      if (!body || body.length > 3_000_000) return;
      bag.push({ url, status: res.status(), contentType: ct, body });
    } catch {}
  });
  return bag;
}

async function ensureLoggedIn(page) {
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => {});
  await sleep(2000);
  if (/weblogin|shibboleth|duo|login/i.test(page.url())) {
    log('Login required. Finish Weblogin + Duo in the Chrome window.');
    await ask('Press Enter here once Atlas is showing... ');
  }
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  if (/weblogin|shibboleth|login/i.test(page.url())) throw new Error('Still not logged in; rerun `recon` and complete the login.');
  log('Logged in; session saved in', PROFILE);
}

async function capturePage(page, url, tag, bag) {
  bag.length = 0;
  const started = Date.now();
  let status = null;
  try { const r = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }); status = r ? r.status() : null; } catch (e) { log('goto failed', url, e.message.slice(0, 80)); }
  await sleep(1200);
  const text = await page.evaluate(() => document.body ? document.body.innerText : '').catch(() => '');
  const html = await page.content().catch(() => '');
  const title = await page.title().catch(() => '');
  return { tag, url, finalUrl: page.url(), status, title, ms: Date.now() - started, text, html, json: bag.slice(), fetchedAt: now() };
}

const throttled = (cap) => cap.status === 429 || /too many requests|rate limit|slow down/i.test(cap.text || '');

async function recon() {
  const ctx = await launch(true);
  const page = await ctx.newPage(); const bag = attachCollector(page);
  await ensureLoggedIn(page);
  const probes = [
    ['home', BASE + '/'],
    ['course-eecs281', BASE + '/course/EECS%20281/'],
    ['course-si507', BASE + '/course/SI%20507/'],
    ['subject-eecs', BASE + '/subject/EECS/'],
    ['search-eecs', BASE + '/search/?q=EECS'],
    ['browse', BASE + '/browse/'],
    ['courses', BASE + '/courses/'],
    ['instructor', BASE + '/instructor/'],
  ];
  const summary = [];
  for (const [tag, url] of probes) {
    const cap = await capturePage(page, url, tag, bag);
    fs.writeFileSync(path.join(RECON, tag + '.json'), JSON.stringify(cap, null, 1));
    await page.screenshot({ path: path.join(RECON, tag + '.png'), fullPage: false }).catch(() => {});
    const codes = Array.from(new Set((cap.text.match(/\b[A-Z]{2,8} \d{3}\b/g) || []))).length;
    summary.push({ tag, url, status: cap.status, finalUrl: cap.finalUrl, title: cap.title, textChars: cap.text.length, jsonResponses: cap.json.map(j => `${j.status} ${j.url.replace(BASE, '')} (${j.body.length}b)`), courseCodesSeen: codes });
    log(tag, cap.status, cap.finalUrl, 'json:', cap.json.length, 'codes:', codes);
    await sleep(DELAY);
  }
  fs.writeFileSync(path.join(RECON, 'summary.json'), JSON.stringify(summary, null, 1));
  log('Recon done → data/atlas/_recon/summary.json. Commit and push it; the parser gets written from these samples.');
  await ctx.close();
}

async function discover() {
  const ctx = await launch(false);
  const page = await ctx.newPage(); const bag = attachCollector(page);
  await ensureLoggedIn(page);
  const found = new Set();
  const seedFile = path.join(OUT, 'seed-codes.txt');
  if (fs.existsSync(seedFile)) fs.readFileSync(seedFile, 'utf8').split(/\n/).map(s => s.trim()).filter(Boolean).forEach(c => found.add(c));
  // Strategy A: LSA Course Guide (public, no login) lists every course per subject for the term.
  let cgOk = false;
  try {
    const cap = await capturePage(page, 'https://www.lsa.umich.edu/cg/cg_subjectlist.aspx?termArray=f_26_2560&cgtype=ug', 'lsa-cg', bag);
    const subjects = Array.from(new Set((cap.html.match(/department=([A-Z]{2,8})/g) || []).map(s => s.split('=')[1])));
    if (subjects.length > 20) {
      cgOk = true; log('LSA Course Guide subjects:', subjects.length);
      for (const subj of subjects) {
        const c = await capturePage(page, `https://www.lsa.umich.edu/cg/cg_results.aspx?termArray=f_26_2560&cgtype=ug&show=2000&department=${subj}`, 'cg-' + subj, bag);
        const re = new RegExp('\\b' + subj + ' (\\d{3})\\b', 'g'); let m, n = 0;
        while ((m = re.exec(c.text))) { if (!found.has(subj + ' ' + m[1])) { found.add(subj + ' ' + m[1]); n++; } }
        log('CG', subj, '+' + n, 'total', found.size); await sleep(Math.max(1000, DELAY / 2));
      }
    }
  } catch (e) { log('LSA CG discovery failed:', e.message.slice(0, 100)); }
  // Strategy B: Atlas search per subject (works if recon showed /search/?q= returns codes).
  if (!cgOk || found.size < 500) {
    for (const subj of SUBJECTS_FALLBACK) {
      const c = await capturePage(page, `${BASE}/search/?q=${subj}`, 'atlas-search-' + subj, bag);
      if (throttled(c)) { log('throttled during discovery; sleeping 10 min'); await sleep(600000); }
      const re = new RegExp('\\b' + subj + ' (\\d{3})\\b', 'g'); let m, n = 0;
      const hay = c.text + ' ' + c.json.map(j => j.body).join(' ');
      while ((m = re.exec(hay))) { if (!found.has(subj + ' ' + m[1])) { found.add(subj + ' ' + m[1]); n++; } }
      log('Atlas search', subj, '+' + n, 'total', found.size); await sleep(DELAY);
    }
  }
  const codes = Array.from(found).sort();
  fs.writeFileSync(CODES_FILE, codes.join('\n') + '\n');
  log('Discovered', codes.length, 'course codes →', CODES_FILE);
  await ctx.close();
}

async function scrape() {
  if (!fs.existsSync(CODES_FILE)) throw new Error(`No ${CODES_FILE}. Run: node scripts/scrape-atlas.mjs discover  (or write one code per line yourself)`);
  const codes = fs.readFileSync(CODES_FILE, 'utf8').split(/\n/).map(s => s.trim()).filter(Boolean);
  const todo = codes.filter(c => !fs.existsSync(path.join(RAW, c.replace(/[^A-Z0-9]+/g, '_') + '.json')));
  log(`codes: ${codes.length}, already done: ${codes.length - todo.length}, to do: ${LIMIT ? Math.min(LIMIT, todo.length) : todo.length}`);
  const ctx = await launch(false);
  const page = await ctx.newPage(); const bag = attachCollector(page);
  await ensureLoggedIn(page);
  let n = 0, failures = 0;
  for (const code of todo) {
    if (LIMIT && n >= LIMIT) break;
    const file = path.join(RAW, code.replace(/[^A-Z0-9]+/g, '_') + '.json');
    const cap = await capturePage(page, `${BASE}/course/${encodeURIComponent(code)}/`, code, bag);
    if (throttled(cap)) { log('THROTTLED at', code, '— sleeping 10 minutes, then resuming'); await sleep(600000); continue; }
    if (/weblogin|shibboleth/i.test(cap.finalUrl)) { log('Session expired; rerun `recon` to log in again.'); break; }
    const ok = cap.status && cap.status < 400 && cap.text.length > 200;
    if (ok) { fs.writeFileSync(file, JSON.stringify(cap)); n++; failures = 0; }
    else { failures++; fs.appendFileSync(path.join(OUT, 'failed.txt'), `${code}\t${cap.status}\t${cap.finalUrl}\n`); }
    if ((n + failures) % 25 === 0) log(`progress: saved ${n}, failed ${failures}, remaining ${todo.length - n - failures}`);
    if (failures >= 15) { log('15 consecutive failures; stopping. Check data/atlas/failed.txt and the login.'); break; }
    await sleep(DELAY + Math.floor(Math.random() * 800));
  }
  log(`done: saved ${n} this run; raw files total ${fs.readdirSync(RAW).length}`);
  await ctx.close();
}

const run = { recon, discover, scrape }[MODE];
if (!run) { console.error('usage: node scripts/scrape-atlas.mjs recon|discover|scrape [--limit N] [--codes file]'); process.exit(2); }
run().catch(e => { log('FATAL', e.message); process.exit(1); });
