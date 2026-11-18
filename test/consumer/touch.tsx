// Measures the touch area of the controls drawn under 44px (1.3.0) in a real browser (Chromium via Playwright):
// visible size unchanged from 1.2.0, hit area ≥ 44 × 44, no overlap between neighbours, 2px focus ring on the visible box.
import { renderToStaticMarkup } from 'react-dom/server';
import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { Button, SegmentedControl, ChoiceToggle, FilterChips } from 'zg-wedding-design-system';

const dist = dirname(createRequire(import.meta.url).resolve('zg-wedding-design-system'));

const body = renderToStaticMarkup(
  <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 40, padding: 40, width: 600 }}>
    <div id="seg-md"><SegmentedControl options={['Lista', 'Moodboard', 'A']} value="Lista" label="Vista" /></div>
    <div id="seg-sm"><SegmentedControl size="sm" options={['CLP', 'USD']} value="CLP" label="Moneda" /></div>
    <div id="choice"><ChoiceToggle value="yes" label="Ceremonia · Carolina" /></div>
    <div id="chips"><FilterChips options={['Todos', 'Sin responder', '1', 'Asisten', 'No asisten']} value="Todos" label="Estado" /></div>
    <div id="links"><FilterChips asLinks options={['Programa', 'Lugar']} label="Secciones" /></div>
    <div id="btn"><Button size="sm" variant="secondary">Ver</Button></div>
  </main>
);
const dir = join(process.cwd(), 'build');
mkdirSync(dir, { recursive: true });
const file = join(dir, 'touch.html');
writeFileSync(file, `<!doctype html><html lang="es"><head><meta charset="utf-8">
<link rel="stylesheet" href="${pathToFileURL(join(dist, 'tokens.css'))}"><link rel="stylesheet" href="${pathToFileURL(join(dist, 'styles.css'))}">
</head><body style="margin:0">${body}</body></html>`);

// Visible height of each control in 1.2.0; the touch area must not change it.
const groups: { name: string; sel: string; height: number }[] = [
  { name: 'SegmentedControl md', sel: '#seg-md .mx-seg__opt', height: 40 },
  { name: 'SegmentedControl sm', sel: '#seg-sm .mx-seg__opt', height: 36 },
  { name: 'ChoiceToggle', sel: '#choice .mx-choice__opt', height: 40 },
  { name: 'FilterChips', sel: '#chips .mx-chip', height: 40 },
  { name: 'FilterChips (links)', sel: '#links .mx-chip', height: 40 },
  { name: 'Button sm', sel: '#btn .mx-btn', height: 40 },
];

const TOL = 0.02; // computed offsets of the min()/calc() insets are rounded to 1/64 px
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 700, height: 900 } });
  await page.goto(pathToFileURL(file).href);

  for (const g of groups) {
    const boxes = await page.$$eval(g.sel, (els) => els.map((el) => {
      const r = el.getBoundingClientRect();
      const b = getComputedStyle(el, '::before');
      const px = (v: string) => (v.endsWith('px') ? parseFloat(v) : 0);
      // ::before is positioned against the padding box (inside the border).
      const s = getComputedStyle(el);
      const pad = { left: r.left + px(s.borderLeftWidth), top: r.top + px(s.borderTopWidth), right: r.right - px(s.borderRightWidth), bottom: r.bottom - px(s.borderBottomWidth) };
      const hit = b.content === 'none' || b.position !== 'absolute'
        ? { left: r.left, top: r.top, right: r.right, bottom: r.bottom }
        : { left: Math.min(r.left, pad.left + px(b.left)), top: Math.min(r.top, pad.top + px(b.top)), right: Math.max(r.right, pad.right - px(b.right)), bottom: Math.max(r.bottom, pad.bottom - px(b.bottom)) };
      // Real hit-testing 1px inside each edge (subpixel edges between neighbours snap either way) of the hit box: the browser must resolve every point to this control.
      const inside = [[hit.left + 1, (hit.top + hit.bottom) / 2], [hit.right - 1, (hit.top + hit.bottom) / 2],
        [(hit.left + hit.right) / 2, hit.top + 1], [(hit.left + hit.right) / 2, hit.bottom - 1]]
        .every(([x, y]) => { const t = document.elementFromPoint(x, y); return !!t && (t === el || el.contains(t)); });
      return { label: el.textContent, visual: { w: r.width, h: r.height }, hit, inside };
    }));
    assert.ok(boxes.length > 0, `${g.name}: rendered`);
    for (const b of boxes) {
      const where = `${g.name} "${b.label}"`;
      assert.equal(b.visual.h, g.height, `${where}: visible height stays ${g.height}px`);
      assert.ok(b.hit.bottom - b.hit.top >= 44 - TOL, `${where}: hit height ${b.hit.bottom - b.hit.top} ≥ 44`);
      assert.ok(b.hit.right - b.hit.left >= 44 - TOL, `${where}: hit width ${b.hit.right - b.hit.left} ≥ 44`);
      assert.ok(b.inside, `${where}: the whole hit area resolves to the control`);
    }
    for (let i = 1; i < boxes.length; i++) {
      const a = boxes[i - 1].hit, b = boxes[i].hit;
      const overlap = Math.min(a.right, b.right) - Math.max(a.left, b.left) > 0 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 0;
      assert.ok(!overlap, `${g.name}: hit areas of "${boxes[i - 1].label}" and "${boxes[i].label}" do not overlap`);
    }
  }

  // Layout is unchanged: the chips row keeps its 40px height and doesn't scroll vertically.
  const row = await page.$eval('#chips .mx-chips', (el) => ({ h: el.parentElement!.getBoundingClientRect().height, sh: el.scrollHeight, ch: el.clientHeight }));
  assert.equal(row.h, 40, 'FilterChips row still takes 40px in the layout');
  assert.ok(row.sh <= row.ch, 'FilterChips row has no vertical scroll');

  // Keyboard focus: 2px ring around the visible control, not the hit area.
  await page.keyboard.press('Tab');
  const ring = await page.evaluate(() => {
    const el = document.activeElement!, s = getComputedStyle(el);
    return { cls: el.className, w: s.outlineWidth, style: s.outlineStyle, offset: s.outlineOffset, h: el.getBoundingClientRect().height };
  });
  assert.match(ring.cls, /mx-seg__opt/);
  assert.deepEqual([ring.w, ring.style, ring.offset, ring.h], ['2px', 'solid', '2px', 40], 'focus ring on the visible 40px option');
} finally {
  await browser.close();
}
console.log('touch areas OK');
