type ProxyListProps = { list: string[] };

export function ProxyList({ list }: ProxyListProps) {
  return (
    <>
      <ul>
        {list.map((l, i) => <li key={i}><a href={l}>list:{i}</a></li>)}
      </ul>
    </>
  )
}
