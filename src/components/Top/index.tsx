import styles from "./style.module.css";
import Header from "components/Header";
import ArticleList from "components/ArticlesList";
import Pagination from "components/Pagination";

export type TopProps = {
  blogs: BlogProps[];
  totalCount: number;
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

function Top({ blogs, totalCount }: TopProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ArticleList blogs={blogs} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}
export default Top;
