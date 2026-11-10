A native select styled as the 48px square field.

## Props
- `label`, `options` (strings or `{value,label}`), `value` / `defaultValue` / `onChange`.
- `hint` (12px `texto-tenue` under the field), `error` (string), `required`, `disabled`.
- `placeholder` — an empty, disabled first option; selected when there is no `value` / `defaultValue` ("Elige un menú.").
- Native pass-through (1.1.0): `name`, `onBlur`, `onFocus`, `autoFocus`, `id` (replaces the generated one), `aria-describedby` (merged with the internal ids).
- `ref` is forwarded (`React.forwardRef`) to the native `<select>`.

## Usage
Menu choice in the RSVP ("Sin preferencia", "Vegetariano", "Vegano", "Menú infantil"). Keep options short.

## Error, required, disabled
- `error="Elige un menú."` sets `aria-invalid="true"`, turns the outline `rojo-texto` and shows the message under the field (12px 600, `rojo-texto`), linked via `aria-describedby`. It replaces the `hint` while present. The 2px focus ring is kept in the error state.
- Contrast of `rojo-texto`: Costa 5.54:1 on `fondo`, 5.64:1 on white; Noche 7.73:1 on `fondo`, 6.84:1 on white.
- `required` adds a discreet " (obligatorio)" in `texto-tenue` after the label. That text is defined here, is `aria-hidden`, and the native `required` attribute is what screen readers announce.
- `disabled` renders at 50% opacity, same as Button.

## Compatibility
1.0.0 usages are unchanged: new props are copied to the native control only when defined.

## With React Hook Form
The component forwards its `ref` to the native `<select>`, so `register()` spreads straight on.

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from '@matrimonio/design-system';

const schema = z.object({ menu: z.string().min(1, 'Elige un menú.') });

function MenuForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
      <Select
        label="Menú" required placeholder="Elige una opción"
        options={['Sin preferencia', 'Vegetariano', 'Vegano', 'Menú infantil']}
        {...register('menu')} error={errors.menu?.message}
      />
    </form>
  );
}
```
