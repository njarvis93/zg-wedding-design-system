// Server-renders the forms and asserts what register() and `error` must produce.
import { renderToString } from 'react-dom/server';
import assert from 'node:assert/strict';
import { RsvpForm, Legacy, rsvpSchema, type Rsvp } from './form.js';
import type { FieldErrors } from 'react-hook-form';

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

console.log('consumer render OK');
