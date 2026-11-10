A labelled square input with a 2px `mayolica` outline — plain, the centred invitation-code field, search, or multi-line.

## Props
- `label` (14px 600, above the field), `placeholder`, `hint` (12px `texto-tenue` under it), `value` / `defaultValue` / `onChange`.
- `variant`: `default` (48px, white) · `code` (52px, `fondo` ground, `code` style, centred) · `search` (46px with the search icon, label visually hidden).
- `multiline` + `rows` — a textarea (message to the couple).
- `error` (string) — see "Error, required, disabled".
- `required`, `disabled`, `readOnly`.
- Native pass-through (1.1.0): `name`, `onBlur`, `onFocus`, `autoComplete`, `autoFocus`, `inputMode`, `maxLength`, `minLength`, `pattern`, `min`, `max`, `step`, `id` (replaces the generated one), `aria-describedby` (merged with the internal hint/error ids).
- `ref` is forwarded (`React.forwardRef`) to the native `<input>` / `<textarea>`.
- `code` variant also sets `autoCapitalize="characters"` and `spellCheck={false}`, and respects `maxLength` — use `maxLength={8}` for the 8-character invitation code.

## Usage
- Placeholders give an example, not the label: "Ej.: sin gluten, alergia a frutos secos", "XXXX-XXXX".
- Put privacy hints under sensitive fields: "Solo Narvis y Juan pueden verlo." 

## Error, required, disabled
- `error="El código tiene 8 caracteres."` sets `aria-invalid="true"`, turns the outline `rojo-texto` and shows the message under the field (12px 600, `rojo-texto`), linked via `aria-describedby`. It replaces the `hint` while present. The 2px focus ring is kept in the error state.
- `variant="search"` sets `aria-invalid` but shows no message (no room, and no label); show the error elsewhere.
- Contrast of `rojo-texto`: Costa 5.54:1 on `fondo`, 5.64:1 on white; Noche 7.73:1 on `fondo`, 6.84:1 on white.
- `required` adds a discreet " (obligatorio)" in `texto-tenue` after the label. That text is defined here, is `aria-hidden`, and the native `required` attribute is what screen readers announce.
- `disabled` renders at 50% opacity, same as Button.

## Compatibility
1.0.0 usages are unchanged: new props are copied to the native control only when defined, so existing calls render the same markup.

## With React Hook Form
The component forwards its `ref` to the native `<input>` / `<textarea>`, so `register()` spreads straight on.

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button } from '@matrimonio/design-system';

const schema = z.object({ code: z.string().length(8, 'El código tiene 8 caracteres.') });

function CodeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
      <TextField
        label="Código de invitación" variant="code" maxLength={8} required
        {...register('code')} error={errors.code?.message}
      />
      <Button type="submit">Continuar</Button>
    </form>
  );
}
```
