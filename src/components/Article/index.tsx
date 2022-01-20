import styles from "./style.module.css";
import Header from "components/Header";
import Body from "components/Body";

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
      <Header />
      <Body
        body={body}
        id={id}
        nextId={nextId}
        prevId={prevId}
        publishDate={publishDate}
        title={title}
      />
    </div>
  );
}
export default Article;
