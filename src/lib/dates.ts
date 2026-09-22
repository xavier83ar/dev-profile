const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2021-06" → "Jun 2021". Unparseable input passes through untouched. */
export function formatMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (!match) return value;
  const index = Number(match[2]) - 1;
  if (index < 0 || index > 11) return value;
  return `${MONTHS[index]} ${match[1]}`;
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
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
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function parse(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  return match ? new Date(Number(match[1]), Number(match[2]) - 1, 1) : null;
}
