import {useEffect, useState} from 'react'
import './App.css'
import {loadRawProxies} from "./proxy/loadRawProxies.ts";
import {type ParsedProxy, parseRawProxies} from "./proxy/parseRawProxies.ts";
import {ProxyList} from "./proxy/ProxyList/ProxyList.tsx";

function App() {
  const [proxies, setProxies] = useState<ParsedProxy[]>([]);

  useEffect(() => {
    loadRawProxies().then(parseRawProxies).then(setProxies);
  }, [])

  return (
    <>
      <section id="proxyList">
        <ProxyList list={proxies} />
      </section>
    </>
  )
}

export default App
