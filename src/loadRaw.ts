const DEFAULT_LOAD_LINK = "https://gist.githubusercontent.com/Valcrous/3d593cae38fbd64313d33e75dbfbef69/raw/8284bf0d1fcf6f516dea4d138208403a240741a6/proxies.txt";

export async function loadRaw(link?: string): Promise<string>
{
  const res = await fetch(new URL(link ?? DEFAULT_LOAD_LINK));
  if (!res.ok) throw new Error("res сломана");
  return await res.text();
}
