import Link from "next/link";
import styles from "./style.module.css";

function NotFound(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2>指定したurlには記事がありません</h2>
      <Link href={"/"}>
        <a className={styles.link}>ホーム画面に戻る</a>
      </Link>
    </div>
  );
}

export default NotFound;
