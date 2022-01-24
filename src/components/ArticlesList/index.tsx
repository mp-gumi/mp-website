import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import { BlogProps } from "components/Top";

type ArticleListProps = {
  blogs: BlogProps[];
};

function ArticleList({ blogs }: ArticleListProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {blogs.map(({ id, publishDate, thumbnail, title }) => (
        <div key={id} className={styles.article}>
          <Link href={`/blog/${id}`}>
            <a className={styles.link}>
              <div className={styles.date}>
                {publishDate
                  ? dayjs(publishDate).format("YYYY.MM.DD")
                  : "1970.01.01"}
              </div>
              <div className={styles.title}>{title}</div>
              {thumbnail ? (
                <div className={styles.thumbnailWrapper}>
                  <Image
                    alt="thumbnail"
                    src={thumbnail.url}
                    width="96px"
                    height="54px"
                  />
                </div>
              ) : null}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ArticleList;
