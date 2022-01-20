import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import { TopProps } from "components/Top";

function ArticleList({ blogs }: TopProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {blogs.map(({ id, publishDate, thumbnail, title }) => (
        <div key={id} className={styles.article}>
          <Link href={`/blog/${id}`}>
            <a className={styles.link}>
              <div className={styles.date}>
                {dayjs(publishDate).format("YYYY.MM.DD")}
              </div>
              <div className={styles.title}>{title}</div>
              <div className={styles.thumbnailWrapper}>
                {thumbnail ? (
                  <div className={styles.thumbnailInner}>
                    <Image
                      alt="thumbnail"
                      src={thumbnail.url}
                      width="96px"
                      height="54px"
                    />
                  </div>
                ) : (
                  <div className={styles.dummy} />
                )}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ArticleList;
