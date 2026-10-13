import type {ParsedProxy} from "./parseRawProxies.ts";

type ProxyListProps = { list: ParsedProxy[] };

export function ProxyList({ list }: ProxyListProps) {
  return (
    <>
      <ul>
        {list.map((l, i) => <li key={i}><a href={l.url.toString()}>list:{l.server}</a></li>)}
      </ul>
    </>
  )
}
