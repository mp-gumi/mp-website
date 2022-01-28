import styles from "./style.module.css";
import Body from "components/Body";
import ArticleLinkButtons from "components/ArticleLinkButtons";

type ArticleProps = {
  body: string;
  id: string;
  nextId: string;
  prevId: string;
  publishDate: string;
  title: string;
};

function Article({
  body,
  id,
  nextId,
  prevId,
  publishDate,
  title,
}: ArticleProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Body body={body} publishDate={publishDate} title={title} />
        <ArticleLinkButtons id={id} nextId={nextId} prevId={prevId} />
      </div>
    </div>
  );
}
export default Article;
