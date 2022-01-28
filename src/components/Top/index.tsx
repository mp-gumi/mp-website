import styles from "./style.module.css";
import ArticleList from "components/ArticlesList";
import Pager from "components/Pager";

export type TopProps = {
  blogs: BlogProps[];
  totalCount: number;
  pageIndex: number;
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

function Top({ blogs, pageIndex, totalCount }: TopProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ArticleList blogs={blogs} />
      <Pager totalCount={totalCount} pageIndex={pageIndex} />
    </div>
  );
}
export default Top;
