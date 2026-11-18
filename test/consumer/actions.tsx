// Button / IconButton as Radix `asChild` triggers, plus the keyboard-reachable ComparisonTable.
import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button, IconButton, ComparisonTable, Sidebar, Icon } from 'zg-wedding-design-system';

export function DialogDemo({ defaultOpen = false }: { defaultOpen?: boolean }) {
  return (
    <Dialog.Root defaultOpen={defaultOpen}>
      <Dialog.Trigger asChild><Button data-testid="open">Abrir</Button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content aria-describedby={undefined}>
          <Dialog.Title>Título</Dialog.Title>
          <Dialog.Close asChild><IconButton icon="check" label="Cerrar" data-testid="close" /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Typed refs and pass-through attributes (strict), and 1.1.0 calls with no new props.
export function ActionsDemo() {
  const btn = useRef<HTMLButtonElement>(null);
  const link = useRef<HTMLAnchorElement>(null);
  const icon = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Button ref={btn} id="b" aria-haspopup="dialog" data-x="1" type="submit" onKeyDown={(e) => e.key}>Enviar</Button>
      <Button ref={link} href="/x" aria-label="Ir" data-y="2">Ir</Button>
      <IconButton ref={icon} icon="plus" label="Agregar" id="i" aria-expanded={false} data-z="3" />
      <Button variant="secondary" size="md" block pressed={false} onClick={() => {}}>Legacy</Button>
      <IconButton icon="bell" label="Avisos" dot onClick={() => {}} />
    </div>
  );
}

export function TableDemo() {
  return (
    <div>
      <ComparisonTable columns={[{ title: 'A' }, { title: 'B' }]} rows={[{ label: 'Precio', cells: ['1', '2'] }]} />
      <ComparisonTable label="Opciones de menú" columns={[{ title: 'A' }]} rows={[]} />
      <ComparisonTable labelledBy="h-prop" columns={[{ title: 'A' }]} rows={[]} />
    </div>
  );
}

// Sidebar foot: a string (1.2.0), a button, a link with the settings icon and no people, and neither.
export function SidebarDemo() {
  const items = [{ value: 'panel', label: 'Panel' }];
  return (
    <div>
      <Sidebar items={items} people={['N', 'J']} footer="Narvis y Juan" />
      <Sidebar items={items} people={['N', 'J']} footer={<button type="button">Cerrar sesión</button>} />
      <Sidebar items={items} footer={<a href="/ajustes"><Icon name="settings" size={20} />Ajustes</a>} />
      <Sidebar items={items} />
    </div>
  );
}
