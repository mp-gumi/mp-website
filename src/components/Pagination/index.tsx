import Link from "next/link";
import styles from "./style.module.css";

type PaginationProps = {
  totalCount: number;
};

function Pagination({ totalCount }: PaginationProps): JSX.Element {
  const perPage = 10;
  const range = (start: number, end: number) =>
    Array(end - start + 1)
      .fill(0)
      .map((_, i) => start + i);

  return (
    <ul className={styles.wrapper}>
      {range(1, Math.ceil(totalCount / perPage)).map(
        (pageIndex: number, index) => (
          <li key={index}>
            <Link href={`/blog/page/${pageIndex}`}>
              <a className={styles.link}>{pageIndex}</a>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default Pagination;
