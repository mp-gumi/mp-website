import styles from "./style.module.css";
import Header from "components/Header";
import ArticleList from "components/ArticlesList";

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
      <ArticleList blogs={blogs} />
    </div>
  );
}
export default Top;
