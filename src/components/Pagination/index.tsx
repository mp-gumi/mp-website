import Link from "next/link";
import { useCallback, useMemo } from "react";
import styles from "./style.module.css";

type PaginationProps = {
  totalCount: number;
  pageIndex: number;
};

function Pagination({ pageIndex, totalCount }: PaginationProps): JSX.Element {
  const lastPageIndex = useMemo(() => Math.ceil(totalCount / 10), [totalCount]);

  const pageLinks = useCallback((pageIndex: number, lastPageIndex: number) => {
    //総ページ数が7以下の場合
    if (lastPageIndex < 8) {
      return Array(lastPageIndex)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <Link href={`/blog/page/${index + 1}`}>
              <a className={styles.link}>
                <div className={styles.box}>{index + 1}</div>
              </a>
            </Link>
          </li>
        ));
    }

    //現在のページが1~3の場合
    if (pageIndex < 4) {
      return Array(6)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <Link href={`/blog/page/${index + 1}`}>
              <a className={styles.link}>
                <div className={styles.box}>{index + 1}</div>
              </a>
            </Link>
          </li>
        ));
    }

    //現在のページが最後から3番目以内の場合
    if (pageIndex > lastPageIndex - 3) {
      return Array(6)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <Link href={`/blog/page/${lastPageIndex - 5 + index}`}>
              <a className={styles.link}>
                <div className={styles.box}>{lastPageIndex - 5 + index}</div>
              </a>
            </Link>
          </li>
        ));
    }

    //現在のページを中心に5つ表示
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <li key={index}>
          <Link href={`/blog/page/${pageIndex - 2 + index}`}>
            <a className={styles.link}>
              <div className={styles.box}>{pageIndex - 2 + index}</div>
            </a>
          </Link>
        </li>
      ));
  }, []);

  const toFirstPageLink = useCallback(
    (pageIndex: number, lastPageIndex: number) => {
      if (pageIndex < 4 || lastPageIndex < 8) {
        return;
      }
      return (
        <li>
          <Link href={`/blog/page/1`}>
            <a className={styles.link}>
              <div className={styles.box}>{"<<"}</div>
            </a>
          </Link>
        </li>
      );
    },
    []
  );

  const toLastPageLink = useCallback(
    (pageIndex: number, lastPageIndex: number) => {
      if (pageIndex > lastPageIndex - 3 || lastPageIndex < 8) {
        return;
      }
      return (
        <li>
          <Link href={`/blog/page/${lastPageIndex}`}>
            <a className={styles.link}>
              <div className={styles.box}>{">>"}</div>
            </a>
          </Link>
        </li>
      );
    },
    []
  );

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {toFirstPageLink(pageIndex, lastPageIndex)}
        {pageLinks(pageIndex, lastPageIndex)}
        {toLastPageLink(pageIndex, lastPageIndex)}
      </ul>
    </div>
  );
}

export default Pagination;
