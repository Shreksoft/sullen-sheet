import type {ParsedProxy} from "../../parseRawProxies.ts";
import styles from "./ProxyItem.module.css";

type ProxyProps = {
  proxy: ParsedProxy,
  visited: boolean,
  onVisit: () => void
};

export function ProxyItem({proxy, visited, onVisit}: ProxyProps) {
  return (
    <li className={styles.item} data-visited={visited}>
      <a
        className={styles.link}
        href={proxy.url.toString()}
        onClick={onVisit}
      >
        <span>server</span>
        <span>{proxy.server}</span>
        <span>port</span>
        <span>{proxy.port}</span>
      </a>
    </li>
  )
}
