import { Button } from "@mui/material";
import Link from "next/link";
import { useCallback } from "react";
import styles from "./style.module.css";

type ArticleLinkButtonsProps = {
  id: string;
  nextId: string;
  prevId: string;
};

function ArticleLinkButtons({
  id,
  nextId,
  prevId,
}: ArticleLinkButtonsProps): JSX.Element {
  const prevArticleLink = useCallback((id: string, prevId: string) => {
    if (id === prevId) return <div />;

    return (
      <Link href={`/blog/${prevId}`}>
        <a className={styles.otherArticleLink}>
          <Button variant="contained" color="primary">
            １つ前の記事へ
          </Button>
        </a>
      </Link>
    );
  }, []);

  const nextArticleLink = useCallback((id: string, nextId: string) => {
    if (id === nextId) return <div />;

    return (
      <Link href={`/blog/${nextId}`}>
        <a className={styles.otherArticleLink}>
          <Button variant="contained" color="primary">
            １つ次の記事へ
          </Button>
        </a>
      </Link>
    );
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {nextArticleLink(id, nextId)}
        {prevArticleLink(id, prevId)}
      </div>
      <Link href="/">
        <a className={styles.topLink}>
          <Button
            variant="outlined"
            sx={{ borderColor: "#999", color: "#828282" }}
          >
            ブログトップへ
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default ArticleLinkButtons;
