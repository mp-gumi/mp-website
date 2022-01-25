import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import styles from "./style.module.css";

function NotFound(): JSX.Element {
  const { windowHeight } = useWindowSize();
  return (
    <div className={styles.wrapper} style={{ height: windowHeight }}>
      <div>ページが見つかりませんでした</div>
      <Link href={"/"}>
        <a className={styles.link}>トップに戻る</a>
      </Link>
    </div>
  );
}

export default NotFound;
