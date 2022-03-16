/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import dayjs from "dayjs";

type BodyProps = {
  body: string;
  publishDate: string;
  title: string;
};

const wrapperStyle = css`
  margin: 0 auto;
  text-align: center;
`;
const titleStyle = css`
  color: "#000";
  text-align: center;
`;
const dateStyle = css`
  color: #828282;
  font-size: 12px;
  padding: 16px 20px 16px 0;
  text-align: right;
`;
const bodyStyle = css`
  padding: 0 0 20px;
  text-align: left;
  h3 {
    margin: 20px 0 4px;
  }
  h4 {
    margin: 12px 0 4px;
  }
`;

function Body({ body, publishDate, title }: BodyProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <h2 css={titleStyle}>{title}</h2>
      <div css={dateStyle}>
        {publishDate ? dayjs(publishDate).format("YYYY.MM.DD") : ""}
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} css={bodyStyle} />
    </div>
  );
}
export default Body;
