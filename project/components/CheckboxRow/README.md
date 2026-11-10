A checkbox with its label — boxed as a form option, or as a task row with a person tag and due date.

## Props
- `label`, `checked` / `defaultChecked` / `onChange`.
- `error` (string), `required`, `disabled`.
- Native pass-through (1.1.0): `name`, `value`, `onBlur`, `onFocus`, `id`, `aria-describedby` (merged with the internal error id).
- `ref` is forwarded (`React.forwardRef`) to the native checkbox `<input>`.
- `boxed` — 48px white box with a 2px `mayolica` outline (RSVP "Nos interesa compartir auto").
- Task rows: `divider` (1px `lavanda` rule), `tag` + `tagTone` (person: "Ambos", "Juan", "Narvis"), `due` ("20 nov"), `meta` (second line, app layout), `urgent` (due in `rojo-texto`), `done` (strike-through).

## Usage
Use the browser's checkbox with `accent-color: mayolica`; never a custom switch.

## Error, required, disabled
- `error="Confirma tu asistencia."` sets `aria-invalid="true"`, outlines a `boxed` row in `rojo-texto` and renders the message (12px 600, `rojo-texto`) as a sibling right after the row, linked via `aria-describedby`. The component returns a fragment, so showing the error never remounts the checkbox. The 2px focus ring is kept.
- Contrast of `rojo-texto`: Costa 5.54:1 on `fondo`, 5.64:1 on white; Noche 7.73:1 on `fondo`, 6.84:1 on white.
- `required` adds a discreet " (obligatorio)" in `texto-tenue` after the label. That text is defined here, is `aria-hidden`, and the native `required` attribute is what screen readers announce.
- `disabled` renders at 50% opacity, same as Button.

## Compatibility
1.0.0 usages are unchanged: new props are copied to the native control only when defined.

## With React Hook Form
The component forwards its `ref` to the native checkbox, so `register()` spreads straight on.

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckboxRow } from '@matrimonio/design-system';

const schema = z.object({ asistencia: z.literal(true, { errorMap: () => ({ message: 'Confirma tu asistencia.' }) }) });

function RsvpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
      <CheckboxRow
        boxed required label="Confirmo mi asistencia"
        {...register('asistencia')} error={errors.asistencia?.message}
      />
    </form>
  );
}
```
