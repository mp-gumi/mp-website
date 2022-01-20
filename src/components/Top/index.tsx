import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import Header from "components/Header";

export type TopProps = {
  blogs: BlogProps[];
};

export type BlogProps = {
  id: string;
  title: string;
  body: string;
  publishDate: string;
  thumbnail?: ThumbnailProps;
};
export type ThumbnailProps = {
  url: string;
  height: number;
  width: number;
};

function Top({ blogs }: TopProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.inner}>
        {blogs.map(({ id, publishDate, thumbnail, title }) => (
          <div key={id} className={styles.article}>
            <Link href={`/blog/${id}`}>
              <a className={styles.link}>
                <div className={styles.date}>
                  {dayjs(publishDate).format("YYYY.MM.DD")}
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.thumbnail}>
                  {thumbnail ? (
                    <Image
                      alt="thumbnail"
                      src={thumbnail.url}
                      width="96px"
                      height="54px"
                    />
                  ) : (
                    <div className={styles.dummy} />
                  )}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Top;
