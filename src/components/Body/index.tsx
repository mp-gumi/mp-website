import dayjs from "dayjs";
import styles from "./style.module.css";

type BodyProps = {
  body: string;
  publishDate: string;
  title: string;
};

function Body({ body, publishDate, title }: BodyProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>
        {publishDate ? dayjs(publishDate).format("YYYY.MM.DD") : ""}
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} className={styles.body} />
    </div>
  );
}
export default Body;
