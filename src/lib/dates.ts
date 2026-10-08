import { __, _n, _p } from "@/i18n";

/** Abbreviated month names, translated on each call so they follow the active language. */
function monthNames(): string[] {
  return [
    _p("month", "Jan"), _p("month", "Feb"), _p("month", "Mar"), _p("month", "Apr"),
    _p("month", "May"), _p("month", "Jun"), _p("month", "Jul"), _p("month", "Aug"),
    _p("month", "Sep"), _p("month", "Oct"), _p("month", "Nov"), _p("month", "Dec"),
  ];
}

/** "2021-06" → "Jun 2021". Unparseable input passes through untouched. */
export function formatMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (!match) return value;
  const index = Number(match[2]) - 1;
  if (index < 0 || index > 11) return value;
  return `${monthNames()[index]} ${match[1]}`;
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : __("Present")}`;
}

/** "5 yrs 4 mos", or null when the dates aren't real dates. */
export function formatDuration(start: string, end: string | null): string | null {
  const from = parse(start);
  const to = end ? parse(end) : new Date();
  if (!from || !to) return null;

  const months =
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
  if (months <= 0) return null;

  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(_n("%1 yr", "%1 yrs", years, years));
  if (rest) parts.push(_n("%1 mo", "%1 mos", rest, rest));
  return parts.join(" ");
}

function parse(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  return match ? new Date(Number(match[1]), Number(match[2]) - 1, 1) : null;
}
