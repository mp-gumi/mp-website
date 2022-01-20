import dayjs from "dayjs";
import styles from "./style.module.css";
import Link from "next/link";
import { useCallback } from "react";

type BodyProps = {
  body: string;
  id: string;
  nextId: string;
  prevId: string;
  publishDate: string;
  title: string;
};

function Body({
  body,
  id,
  nextId,
  prevId,
  publishDate,
  title,
}: BodyProps): JSX.Element {
  const prevArticleLink = useCallback((id: string, prevId: string) => {
    if (id === prevId) return;

    return (
      <Link href={`/blog/${prevId}`}>
        <a className={styles.otherArticleLink}> １つ前の記事へ</a>
      </Link>
    );
  }, []);

  const nextArticleLink = useCallback((id: string, nextId: string) => {
    if (id === nextId) return;

    return (
      <Link href={`/blog/${nextId}`}>
        <a className={styles.otherArticleLink}>１つ次の記事へ</a>
      </Link>
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>
        {dayjs(publishDate).format("YYYY.MM.DD")}
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} className={styles.body} />
      <div className={styles.linksWrapper}>
        {nextArticleLink(id, nextId)}
        {prevArticleLink(id, prevId)}
      </div>
      <div>
        <Link href="/">
          <a className={styles.topLink}>ブログトップへ</a>
        </Link>
      </div>
    </div>
  );
}
export default Body;
