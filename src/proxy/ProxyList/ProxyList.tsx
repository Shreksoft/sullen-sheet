import type {ParsedProxy} from "../parseRawProxies.ts";
import {ProxyItem} from "./ProxyItem/ProxyItem.tsx";
import {useState} from "react";
import styles from "./ProxyList.module.css";


type ProxyListProps = { list: ParsedProxy[] };

type Filter = "all" | "visited" | "unvisited";

export function ProxyList({ list }: ProxyListProps) {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<Filter>("all");

  // функция для получения ключа
  const getKey = (p: ParsedProxy) => p.url.toString();

  // 3 варианта отображения (all, visited, unvisited)
  const visible = list.filter(p => {
    const isVisited = visited.has(getKey(p));
    if (filter === "visited") return isVisited;
    if (filter === "unvisited") return !isVisited;
    return true;
  })

  return (
    <>
      <div className={styles.buttonBox}>
        <button
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          all
        </button>

        <button
          onClick={() => setFilter("visited")}
          aria-pressed={filter === "visited"}
        >
          visited
        </button>

        <button
          onClick={() => setFilter("unvisited")}
          aria-pressed={filter === "unvisited"}
        >
          unvisited
        </button>
      </div>

      <p>total: {visible.length}</p>

      <ol>
        {visible.map(p => {
          const k = getKey(p);
          return <ProxyItem
            key={k}
            proxy={p}
            visited={visited.has(k)}
            onVisit={() => setVisited(prev => new Set(prev).add(k))}
          />
        })}
      </ol>
    </>
  )
}
