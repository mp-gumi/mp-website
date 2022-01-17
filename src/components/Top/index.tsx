import dayjs from "dayjs";
import Link from "next/link";
import styles from "./style.module.css";

export type TopProps = {
  blogs: blogProps[];
};

export type blogProps = {
  id: string;
  title: string;
  body: string;
  publishDate: string;
  thumbnail?: thumbnailProps;
};
type thumbnailProps = {
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
