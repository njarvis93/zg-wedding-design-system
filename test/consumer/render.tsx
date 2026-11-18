// Server-renders the forms and asserts what register() and `error` must produce.
import { renderToString } from 'react-dom/server';
import assert from 'node:assert/strict';
import { RsvpForm, Legacy, rsvpSchema, type Rsvp } from './form.js';
import type { FieldErrors } from 'react-hook-form';
import { ActionsDemo, DialogDemo, TableDemo, SidebarDemo } from './actions.js';

const clean = renderToString(<RsvpForm />);
for (const name of ['codigo', 'nombre', 'menu', 'auto']) assert.match(clean, new RegExp(`name="${name}"`), `register() name for ${name}`);
assert.doesNotMatch(clean, /aria-invalid/, 'no error state without errors');
assert.match(clean, /maxLength="8"/);
assert.match(clean, /autoCapitalize="characters"/);
assert.match(clean, /spellCheck="false"/);
assert.match(clean, /<option value="" disabled="" selected="">Elige una opción<\/option>/);

// Errors exactly as Zod reports them for an empty submission.
const parsed = rsvpSchema.safeParse({ codigo: 'K7M', nombre: '', menu: '', auto: false });
assert.equal(parsed.success, false);
const errors: FieldErrors<Rsvp> = {};
for (const issue of parsed.error!.issues) {
  const key = issue.path[0] as keyof Rsvp;
  errors[key] ??= { type: issue.code, message: issue.message };
}
const withErrors = renderToString(<RsvpForm errors={errors} />);
for (const message of Object.values(errors).map((e) => e!.message!)) assert.ok(withErrors.includes(message), `shows "${message}"`);
assert.equal((withErrors.match(/aria-invalid="true"/g) ?? []).length, 4, 'every field is invalid');
assert.doesNotMatch(withErrors, /Como aparece en la invitación/, 'the error replaces the hint');
for (const m of withErrors.matchAll(/aria-describedby="([^"]+)"/g)) for (const id of m[1].split(' ')) assert.match(withErrors, new RegExp(`id="${id}"`), `describedby target ${id}`);

const legacy = renderToString(<Legacy />);
assert.doesNotMatch(legacy, /aria-invalid|obligatorio|mx-field__error/);
assert.match(legacy, /disabled=""/);

// Button / IconButton: attributes reach the element; href renders an <a>; 1.1.0 output is unchanged.
const actions = renderToString(<ActionsDemo />);
assert.match(actions, /<button[^>]*id="b"[^>]*>/);
assert.match(actions, /<button[^>]*aria-haspopup="dialog"[^>]*data-x="1"[^>]*type="submit"|<button[^>]*type="submit"[^>]*aria-haspopup="dialog"/);
assert.match(actions, /<a [^>]*href="\/x"[^>]*aria-label="Ir"[^>]*data-y="2"|<a [^>]*data-y="2"/);
assert.doesNotMatch(actions, /<a [^>]*type=/, 'no type on the anchor');
assert.match(actions, /<button[^>]*id="i"[^>]*aria-label="Agregar"|<button[^>]*aria-label="Agregar"[^>]*id="i"/);
assert.match(actions, /aria-expanded="false"/);
const legacyBtn = /<button ([^>]*)>Legacy<\/button>/.exec(actions)?.[1] ?? '';
for (const a of ['type="button"', 'class="mx-btn mx-btn--secondary mx-btn--md mx-btn--block"', 'aria-pressed="false"']) assert.ok(legacyBtn.includes(a), `Legacy button keeps ${a}`);
assert.equal(legacyBtn.split('" ').length, 3, 'Legacy button gets no extra attributes');
assert.match(actions, /<button [^>]*class="mx-iconbtn mx-iconbtn--outline"[^>]*aria-label="Avisos"|<button [^>]*aria-label="Avisos"[^>]*class="mx-iconbtn mx-iconbtn--outline"/);

// Radix asChild: the trigger gets Radix's ARIA/data attributes through Button.
const dialog = renderToString(<DialogDemo />);
assert.match(dialog, /<button[^>]*aria-haspopup="dialog"/);
assert.match(dialog, /<button[^>]*aria-expanded="false"/);
assert.match(dialog, /<button[^>]*data-state="closed"/);
assert.match(dialog, /<button[^>]*data-testid="open"/);

// ComparisonTable: scrollable region reachable by keyboard and named.
const table = renderToString(<TableDemo />);
assert.equal((table.match(/class="mx-compare"/g) ?? []).length, 3);
assert.equal((table.match(/tabindex="0"/g) ?? []).length, 3);
assert.equal((table.match(/role="region"/g) ?? []).length, 3);
assert.match(table, /aria-label="Comparación de propuestas"/);
assert.match(table, /aria-label="Opciones de menú"/);
assert.match(table, /aria-labelledby="h-prop"/);

// Sidebar (1.3.0): the foot takes any node and shows with people or footer; 1.2.0 calls render the same.
const side = renderToString(<SidebarDemo />);
const foots = side.match(/<div class="mx-sidebar__foot">.*?<\/div>/g) ?? [];
assert.equal(foots.length, 3, 'foot with people+text, people+button, and footer only; none without either');
assert.match(foots[0], /<span class="mx-sidebar__av"[^>]*>N<\/span><span class="mx-sidebar__av is-stacked"[^>]*>J<\/span><span>Narvis y Juan<\/span>/);
assert.match(foots[1], /<button type="button">Cerrar sesión<\/button>/);
assert.match(foots[2], /^<div class="mx-sidebar__foot"><span><a href="\/ajustes"><svg[^>]*>.*<\/svg>Ajustes<\/a><\/span><\/div>$/);
assert.match(side, /<path d="M10\.07 5\.27/, 'settings icon renders');

console.log('consumer render OK');
