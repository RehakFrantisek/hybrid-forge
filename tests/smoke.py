"""Optional browser checks: Python + Playwright + Chromium; no app build required.
Run from repository root: python3 tests/smoke.py
"""
import json, os, subprocess, threading
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT = Path(__file__).resolve().parents[1]
class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args): pass
server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT.parent)))
threading.Thread(target=server.serve_forever, daemon=True).start()
base = f'http://127.0.0.1:{server.server_port}/{ROOT.name}/'
key = 'hybrid.pwa.v1.2026-10-01'
try:
 with sync_playwright() as p:
  browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'))
  context = browser.new_context(accept_downloads=True)
  page = context.new_page(); errors=[]
  page.on('pageerror', lambda error: errors.append(str(error)))
  page.on('dialog', lambda dialog: dialog.accept())
  page.goto(base)
  assert page.evaluate('SEED.length') == 95
  assert page.evaluate('SEED.at(-1).date') == '31.12.2026'
  assert page.locator('#weekTitle').inner_text() == '28.09.2026 – 04.10.2026'
  assert page.locator('#planUpdate').is_hidden()
  page.locator('#grid [data-exercise="cossack_squat"]').first.click()
  assert page.locator('#exerciseTitle').inner_text() == 'Cossack squat'
  page.keyboard.press('Escape')
  page.locator('[data-tab="exercises"]').click()
  assert page.locator('.exercise-card').count() == 26
  page.locator('#exerciseSearch').fill('kycle')
  assert page.locator('.exercise-card').count() >= 5
  page.locator('#exerciseSearch').fill('not-an-exercise')
  assert 'Žádný' in page.locator('#exerciseGrid').inner_text()
  page.locator('#exerciseSearch').fill('')
  for card in page.locator('.exercise-card').all():
   card.click()
   page.wait_for_function("document.querySelector('#exerciseDetail img').naturalWidth > 0")
   assert page.locator('#exerciseDetail p').count() >= 3
   page.keyboard.press('Escape')
  for width in [320,375,768,1440]:
   page.set_viewport_size({'width':width,'height':900})
   for tab in ['calendar','exercises','settings']:
    page.locator(f'[data-tab="{tab}"]').click()
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (width,tab)
  page.locator('[data-tab="calendar"]').click()
  page.set_viewport_size({'width':1440,'height':1000})
  page.locator('#grid article').nth(3).get_by_role('button',name='✓ Done').click()
  page.reload(); assert page.locator('#grid article.done').count()==1
  page.locator('#grid article').nth(3).get_by_role('button',name='Upravit').click()
  page.locator('#eMorning').fill('Plank – 2x30 s\n<script>bad()</script>')
  page.locator('#saveBtn').click()
  assert page.locator('#grid article').nth(3).locator('[data-exercise="plank"]').count()==1
  assert '<script>bad()</script>' in page.locator('#grid').inner_text()
  page.locator('[data-tab="settings"]').click()
  with page.expect_download() as download: page.locator('#exportBtn').click()
  backup=Path(download.value.path()).read_bytes()
  page.locator('#importInput').set_input_files({'name':'backup.json','mimeType':'application/json','buffer':backup})
  page.wait_for_function("document.querySelector('#importInput').value === ''")
  assert json.loads(page.evaluate(f'localStorage.getItem("{key}")'))==json.loads(backup)
  print('PASS: 95 calendar days, 26 illustrated details, aliases, search, responsive layouts, edit/Done/export/import')
  # Existing local edits remain untouched until explicit plan replacement; backup is downloadable.
  old={'plan':[{'date':'01.10.2026','day':'Čtvrtek','morning':'Moje úprava','evening':''}], 'done':{'01.10.2026':True}}
  page.evaluate('(args) => localStorage.setItem(args[0], JSON.stringify(args[1]))', [key,old]); page.reload()
  assert page.locator('#planUpdate').is_visible()
  assert 'Moje úprava' in page.locator('#grid').inner_text()
  page.locator('#applyPlanBtn').click()
  assert page.evaluate('state.plan.length')==95
  assert page.evaluate('state.done["01.10.2026"]') is True
  assert json.loads(page.evaluate(f'localStorage.getItem("{key}.before-q4-hips")'))==old
  page.locator('[data-tab="settings"]').click()
  with page.expect_download() as download: page.locator('#previousPlanBtn').click()
  assert json.loads(Path(download.value.path()).read_bytes())==old
  page.reload(); assert page.locator('#planUpdate').is_hidden()
  # A storage failure must abort replacement and leave the old plan intact.
  page.evaluate('(args) => localStorage.setItem(args[0], JSON.stringify(args[1]))',[key,old]); page.reload()
  page.evaluate("() => { Storage.prototype.setItem = () => { throw new DOMException('Full','QuotaExceededError'); }; }")
  page.locator('#applyPlanBtn').click()
  assert page.evaluate('state.plan[0].morning')=='Moje úprava'
  page.reload(); page.locator('#applyPlanBtn').click()
  print('PASS: existing data preserved, explicit update, Done retained, backup export, storage failure')
  page.evaluate('navigator.serviceWorker.ready'); page.reload()
  page.wait_for_function('navigator.serviceWorker.controller !== null')
  assert page.evaluate("caches.keys().then(async keys => (await (await caches.open(keys.find(k => k.endsWith(':v2')))).keys()).length)") == 36
  server.shutdown(); server.server_close()
  page.reload()
  page.locator('[data-tab="exercises"]').click()
  for card in page.locator('.exercise-card').all():
   card.click(); page.wait_for_function("document.querySelector('#exerciseDetail img').complete && document.querySelector('#exerciseDetail img').naturalWidth > 0"); page.keyboard.press('Escape')
  assert not errors, errors
  page.screenshot(path='/tmp/hybrid-exercises.png', full_page=True)
  print('PASS: offline reload and all 26 images at a subdirectory URL, no JavaScript errors')
  browser.close()
finally:
 server.shutdown(); server.server_close()
