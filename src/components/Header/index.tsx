import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.link}>ブログ</a>
      </Link>
    </div>
  );
}

export default Header;
