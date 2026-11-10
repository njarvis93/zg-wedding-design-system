// A form written the way zg-wedding-app writes them: React Hook Form + Zod, every control registered with register().
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRef } from 'react';
import { TextField, Select, CheckboxRow } from 'zg-wedding-design-system';

export const rsvpSchema = z.object({
  codigo: z.string().length(8, 'El código tiene 8 caracteres.'),
  nombre: z.string().min(1, 'Escribe tu nombre.'),
  menu: z.string().min(1, 'Elige un menú.'),
  auto: z.literal(true, { errorMap: () => ({ message: 'Confirma que compartes auto.' }) }),
});
export type Rsvp = z.infer<typeof rsvpSchema>;

export function RsvpForm({ errors: forced }: { errors?: FieldErrors<Rsvp> }) {
  const { register, handleSubmit, formState } = useForm<Rsvp>({ resolver: zodResolver(rsvpSchema) });
  const errors = forced ?? formState.errors;
  return (
    <form onSubmit={handleSubmit(() => {})} noValidate>
      <TextField label="Código de invitación" variant="code" placeholder="XXXX-XXXX" maxLength={8} required
        {...register('codigo')} error={errors.codigo?.message} />
      <TextField label="Nombre" autoComplete="name" hint="Como aparece en la invitación." {...register('nombre')} error={errors.nombre?.message} />
      <Select label="Menú" placeholder="Elige una opción" options={['Sin preferencia', 'Vegetariano']} {...register('menu')} error={errors.menu?.message} />
      <CheckboxRow label="Nos interesa compartir auto" boxed {...register('auto')} error={errors.auto?.message} />
    </form>
  );
}

// 1.0.0 calls (no new props) and typed refs/handlers keep compiling.
export function Legacy() {
  const input = useRef<HTMLInputElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  return (
    <div>
      <TextField label="Restricciones" placeholder="Ej.: sin gluten" hint="Solo Narvis y Juan pueden verlo." onChange={(e: any) => e.target.value} />
      <TextField ref={input} label="Buscar" variant="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value} />
      <TextField label="Mensaje" multiline rows={3} disabled />
      <Select ref={select} label="Menú" options={[{ value: 'v', label: 'Vegano' }]} defaultValue="v" onChange={(e) => e.target.value} />
      <CheckboxRow label="Elegir flores" divider tag="Ambos" due="20 nov" urgent onChange={(e) => e.target.checked} />
    </div>
  );
}
