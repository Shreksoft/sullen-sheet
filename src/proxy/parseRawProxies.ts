export type ParsedProxy = { url: URL, server: string, port: number };

export function parseRawProxies(raw: string): ParsedProxy[] {
  return raw.split(/\r?\n/).flatMap(l => {
    const trimmed = l.trim();
    if (trimmed === "") return [];

    let url: URL;
    try { url = new URL(trimmed); }
    catch { return []; }

    const server = url.searchParams.get("server");
    const port = url.searchParams.get("port");
    if (!server || !port) return [];

    const portNum = Number(port);
    if (!Number.isInteger(portNum)) return [];

    return [{ url, server, port: portNum }];
  });
}
