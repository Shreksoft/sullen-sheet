export function parseRaw(raw: string): string[] {
  return raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
}
