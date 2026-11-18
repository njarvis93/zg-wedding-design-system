The couple's desktop menu: a 240px `marino` column with the ghost tile, the wordmark, module links and the two partners at the foot.

## Props
- `items`: `[{value, label, count?, href?}]`, `current`, `subtitle` (default "Planificación"), `people` (initials, e.g. `['N','J']`), `footer` — any React node: a name ("Narvis y Juan"), or a link or button such as "Cerrar sesión". The foot shows when there are `people` **or** a `footer`.

Links and buttons in the foot are drawn as plain `texto-invertido` text on `profundo`, 44px tall, `naranja` on hover; keyboard focus is the 2px `naranja` ring, like the module links.

```jsx
<Sidebar
  items={modules}
  current="panel"
  people={['N', 'J']}
  footer={<button type="button" onClick={signOut}>Cerrar sesión</button>}
/>

<Sidebar items={modules} footer={<a href="/ajustes"><Icon name="settings" size={20} /> Ajustes</a>} />
```

## Usage
Modules in order: Panel · Definiciones · Tareas · Presupuesto · Proveedores · Invitados · Mesas · Cronograma del día · Web de invitados. The active row is `nav-activo` with a `naranja` label; counts use the `naranja` badge.
