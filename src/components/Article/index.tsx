import dayjs from "dayjs";
import Image from "next/image";
import { IdProps } from "pages/blog/[id]";
import { blogProps } from "components/Top";
import styles from "./style.module.css";
import Link from "next/link";

export type ArticleProps = {
  blogs: blogProps;
};

function Article({ blogs }: IdProps): JSX.Element {
  const { body, publishDate, thumbnail, title } = blogs;
  return (
    <div>
      {/* {console.log(blogs)} */}
      <h2 className={styles.title}>{title}</h2>
      {dayjs(publishDate).format("YYYY.MM.DD")}
      {thumbnail ? <Image alt="thumbnail" src={thumbnail.url} /> : null}
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <Link href="/">
        <a>ホームに戻る</a>
      </Link>
    </div>
  );
}
export default Article;
