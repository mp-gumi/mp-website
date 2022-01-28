import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";

function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <AppBar color="primary">
        <Toolbar className={styles.inner}>
          <Link href="/">
            <a className={styles.link}>ブログ</a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
