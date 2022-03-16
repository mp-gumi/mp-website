/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
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

const wrapperStyle = css`
  margin: 0 auto;
  max-width: 768px;
  padding: 32px 0;
`;
const innerStyle = css`
  align-items: center;
  margin: 0 20px;
`;

function Article({
  body,
  id,
  nextId,
  prevId,
  publishDate,
  title,
}: ArticleProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <div css={innerStyle}>
        <Body body={body} publishDate={publishDate} title={title} />
        <ArticleLinkButtons id={id} nextId={nextId} prevId={prevId} />
      </div>
    </div>
  );
}
export default Article;
