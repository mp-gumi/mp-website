import dayjs from "dayjs";
import styles from "./style.module.css";
import Link from "next/link";
import Header from "components/Header";

type ArticleProps = {
  body: string;
  publishDate: string;
  title: string;
};

function Article({ body, publishDate, title }: ArticleProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>
        {dayjs(publishDate).format("YYYY.MM.DD")}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className={styles.body}
      ></div>
      <Link href="/">
        <a className={styles.link}>ブログトップへ</a>
      </Link>
    </div>
  );
}
export default Article;
