import dayjs from "dayjs";
import Link from "next/link";
import styles from "./style.module.css";

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
      {blogs.map(({ id, publishDate, title }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>
            <a>
              {title}
              {dayjs(publishDate).format("YYYY.MM.DD")}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Top;
