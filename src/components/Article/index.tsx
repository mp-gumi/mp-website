import dayjs from "dayjs";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { ThumbnailProps } from "components/Top";

type ArticleProps = {
  body: string;
  publishDate: string;
  thumbnail?: ThumbnailProps;
  title: string;
};

function Article({
  body,
  publishDate,
  thumbnail,
  title,
}: ArticleProps): JSX.Element {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {dayjs(publishDate).format("YYYY.MM.DD")}
      {thumbnail ? (
        <Image
          alt="thumbnail"
          src={thumbnail.url}
          height={thumbnail.height}
          width={thumbnail.width}
        />
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <Link href="/">
        <a>ホームに戻る</a>
      </Link>
    </div>
  );
}
export default Article;
