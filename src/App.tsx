import {useEffect, useState} from 'react'
import './App.css'
import {loadRaw} from "./loadRaw.ts";
import {parseRaw} from "./parseRaw.ts";
import {ProxyList} from "./ProxyList.tsx";

function App() {
  const [proxyList, setProxyList] = useState<string[]>([]);

  useEffect(() => {
    loadRaw().then(parseRaw).then(setProxyList);
  }, [])

  return (
    <>
      <section id="proxyList">
        <ProxyList list={proxyList} />
      </section>
    </>
  )
}

export default App
