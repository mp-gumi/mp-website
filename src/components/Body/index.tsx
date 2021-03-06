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
  padding: 20px 20px 20px 0;
  text-align: right;
`;
const bodyStyle = css`
  padding: 0 0 20px;
  text-align: left;
  line-height: 30px;
  h3 {
    font-size: 24px;
    margin: 30px 0 4px;
  }
  h4 {
    font-size: 20px;
    margin: 30px 0 4px;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: #323232;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
  code {
    background: #323232;
    color: #f0f0f0;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 4px 8px;
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
