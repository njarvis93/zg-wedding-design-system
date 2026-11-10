// Matrimonio — types for `import { … } from 'zg-wedding-design-system'` (and window.Matrimonio in the artifact).
import type { ReactNode, ReactElement, ChangeEvent, ForwardRefExoticComponent, RefAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export type IconName = 'home' | 'info' | 'check-circle' | 'gift' | 'grid' | 'checklist' | 'users' | 'more' | 'star' | 'bell' | 'search' | 'camera' | 'help-circle' | 'map-pin' | 'clock' | 'plane' | 'chevron-left' | 'check' | 'plus' | 'instagram';
export type StatusTone = 'confirmado' | 'pendiente' | 'elegida' | 'descartada';
export type CardTone = 'outline' | 'mayolica' | 'marino' | 'lavanda' | 'pendiente';
type Option = string | { value: string; label: ReactNode };

export interface ButtonProps { variant?: 'primary' | 'secondary' | 'quiet' | 'dark' | 'dashed'; size?: 'sm' | 'md' | 'lg' | 'xl'; block?: boolean; icon?: IconName; href?: string; type?: 'button' | 'submit'; disabled?: boolean; pressed?: boolean; onClick?: () => void; className?: string; children: ReactNode; }
export interface IconButtonProps { icon: IconName; label: string; variant?: 'outline' | 'primary'; dot?: boolean; onClick?: () => void; }
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string; }
export interface BadgeProps { tone?: StatusTone | 'outline' | 'count'; size?: 'md' | 'sm'; children: ReactNode; }
export interface AvatarProps { initials: string; tone?: 'lavanda' | 'pendiente' | 'descartada' | 'naranja'; size?: number; ring?: boolean; name?: string; decorative?: boolean; }
export interface AvatarStackProps { people: { initials: string; name?: string; tone?: AvatarProps['tone'] }[]; label?: string; size?: number; }
export interface ProgressBarProps { value: number; label?: string; height?: number; onDark?: boolean; }
export interface StarRatingProps { value?: number; max?: number; label?: string; onChange?: (n: number) => void; }
/** Native attributes passed straight to the `<input>` / `<textarea>` (React Hook Form's `register()` spreads `name`, `onBlur`, `ref` and its rules). */
type TextFieldNativeProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'disabled' | 'required' | 'readOnly' | 'autoComplete' | 'autoFocus' | 'inputMode' | 'maxLength' | 'minLength' | 'pattern' | 'min' | 'max' | 'step' | 'id' | 'aria-describedby'>
  & Pick<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'onBlur' | 'onFocus'>;
type SelectNativeProps = Pick<SelectHTMLAttributes<HTMLSelectElement>, 'name' | 'onBlur' | 'onFocus' | 'disabled' | 'required' | 'autoFocus' | 'id' | 'aria-describedby'>;
type CheckboxNativeProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'onBlur' | 'onFocus' | 'disabled' | 'required' | 'id' | 'aria-describedby'>;

// `onChange` uses method syntax on purpose: handlers typed `(e: any)` (1.0.0) or for a narrower element still compile.
export interface TextFieldProps extends TextFieldNativeProps { label?: string; placeholder?: string; hint?: string; /** Shown under the field in `rojo-texto` instead of the hint; sets `aria-invalid`. */ error?: string; value?: string; defaultValue?: string; onChange?(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void; variant?: 'default' | 'code' | 'search'; type?: string; multiline?: boolean; rows?: number; className?: string; }
export interface SelectProps extends SelectNativeProps { label: string; options: Option[]; value?: string; defaultValue?: string; onChange?(e: ChangeEvent<HTMLSelectElement>): void; /** Empty, disabled first option. */ placeholder?: string; hint?: string; error?: string; className?: string; }
export interface CheckboxRowProps extends CheckboxNativeProps { label: ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?(e: ChangeEvent<HTMLInputElement>): void; error?: string; boxed?: boolean; divider?: boolean; tag?: string; tagTone?: StatusTone; due?: string; meta?: string; urgent?: boolean; done?: boolean; className?: string; }
export interface SegmentedControlProps { options: Option[]; value: string; onChange?: (v: string) => void; label?: string; size?: 'md' | 'sm'; }
export interface ChoiceToggleProps { value?: 'yes' | 'no'; onChange?: (v: 'yes' | 'no') => void; label?: string; labels?: [string, string]; }
export interface FilterChipsProps { options: Option[]; value?: string; onChange?: (v: string) => void; label?: string; asLinks?: boolean; }
export interface CardProps { tone?: CardTone; pattern?: boolean; padding?: number | string; flush?: boolean; as?: string; href?: string; className?: string; children?: ReactNode; }
export interface StatCardProps { label: ReactNode; value: ReactNode; caption?: ReactNode; progress?: number; tone?: CardTone; size?: 'web' | 'app'; }
export interface CountdownProps { kicker?: string; date: ReactNode; items: { value: ReactNode; label: string }[]; }
export interface TimelineProps { items: { time: string; title: string; text?: string; tag?: string; highlight?: boolean }[]; }
export interface ListRowProps { title: ReactNode; meta?: ReactNode; initials?: string; number?: number | string; leadTone?: 'lavanda' | 'pendiente' | 'descartada'; trailing?: ReactNode; urgent?: boolean; strong?: boolean; badge?: string; badgeTone?: StatusTone; divider?: boolean; href?: string; children?: ReactNode; }
export interface AccordionProps { items: { q: string; a: ReactNode; open?: boolean }[]; }
export interface StatusMessageProps { title: string; children?: ReactNode; }
export interface ActivityItemProps { tone?: 'mayolica' | 'naranja'; time?: string; children: ReactNode; }
export interface GiftItemProps { title: string; price: string; state?: 'free' | 'mine' | 'taken'; image?: string; imageLabel?: string; onReserve?: () => void; onRelease?: () => void; }
export interface FundCardProps { title: string; sub?: string; icon?: IconName; raised: string; goal: string; pct: number; cta?: string; details?: [string, ReactNode][]; defaultOpen?: boolean; }
export interface ComparisonTableProps { corner?: string; columns: { title: string; meta?: string; status?: string; statusTone?: BadgeProps['tone']; imageLabel?: string }[]; rows: { label: string; cells: ReactNode[]; strong?: boolean }[]; }
export interface TabBarProps { items: { value: string; label: string; icon: IconName; href?: string }[]; current?: string; variant?: 'guests' | 'app'; label?: string; }
export interface TopNavProps { items: { value: string; label: string; href?: string }[]; current?: string; guest?: string; label?: string; }
export interface SidebarProps { items: { value: string; label: string; count?: number; href?: string }[]; current?: string; subtitle?: string; people?: string[]; footer?: string; label?: string; }
export interface BackLinkProps { href?: string; children: ReactNode; }
export interface MajolicaStripProps { size?: 'mobile' | 'desktop'; position?: 'top' | 'bottom'; }
export interface MajolicaPatternProps { tone?: 'color' | 'ghost'; scale?: number; }
export interface WordmarkProps { size?: 'md' | 'lg'; onDark?: boolean; }
export interface PlateProps { size?: number; monogram?: boolean; label?: string; }

export declare function Button(props: ButtonProps): ReactElement;
export declare function IconButton(props: IconButtonProps): ReactElement;
export declare function Icon(props: IconProps): ReactElement;
export declare function Badge(props: BadgeProps): ReactElement;
export declare function Avatar(props: AvatarProps): ReactElement;
export declare function AvatarStack(props: AvatarStackProps): ReactElement;
export declare function ProgressBar(props: ProgressBarProps): ReactElement;
export declare function StarRating(props: StarRatingProps): ReactElement;
export declare const TextField: ForwardRefExoticComponent<TextFieldProps & RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>;
export declare const CheckboxRow: ForwardRefExoticComponent<CheckboxRowProps & RefAttributes<HTMLInputElement>>;
export declare function SegmentedControl(props: SegmentedControlProps): ReactElement;
export declare function ChoiceToggle(props: ChoiceToggleProps): ReactElement;
export declare function FilterChips(props: FilterChipsProps): ReactElement;
export declare function Card(props: CardProps): ReactElement;
export declare function StatCard(props: StatCardProps): ReactElement;
export declare function Countdown(props: CountdownProps): ReactElement;
export declare function Timeline(props: TimelineProps): ReactElement;
export declare function ListRow(props: ListRowProps): ReactElement;
export declare function Accordion(props: AccordionProps): ReactElement;
export declare function StatusMessage(props: StatusMessageProps): ReactElement;
export declare function ActivityItem(props: ActivityItemProps): ReactElement;
export declare function GiftItem(props: GiftItemProps): ReactElement;
export declare function FundCard(props: FundCardProps): ReactElement;
export declare function ComparisonTable(props: ComparisonTableProps): ReactElement;
export declare function TabBar(props: TabBarProps): ReactElement;
export declare function TopNav(props: TopNavProps): ReactElement;
export declare function Sidebar(props: SidebarProps): ReactElement;
export declare function BackLink(props: BackLinkProps): ReactElement;
export declare function MajolicaStrip(props: MajolicaStripProps): ReactElement;
export declare function MajolicaPattern(props: MajolicaPatternProps): ReactElement;
export declare function Wordmark(props: WordmarkProps): ReactElement;
export declare function Plate(props: PlateProps): ReactElement;

/** Path data of every icon, keyed by name: [tag, attributes][] in a 24×24 viewBox. */
export declare const ICONS: Record<IconName, [string, Record<string, string | number>][]>;
