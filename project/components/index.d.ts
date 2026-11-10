// Matrimonio — window.Matrimonio. Types as documentation (not type-checked).
import type { ReactNode } from 'react';

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
export interface TextFieldProps { label?: string; placeholder?: string; hint?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; variant?: 'default' | 'code' | 'search'; type?: string; multiline?: boolean; rows?: number; }
export interface SelectProps { label: string; options: Option[]; value?: string; defaultValue?: string; onChange?: (e: any) => void; }
export interface CheckboxRowProps { label: ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (e: any) => void; boxed?: boolean; divider?: boolean; tag?: string; tagTone?: StatusTone; due?: string; meta?: string; urgent?: boolean; done?: boolean; }
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
