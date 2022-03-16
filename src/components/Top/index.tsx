/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
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

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  width: auto;
  padding: 0 0 20px;
`;

function Top({ blogs, pageIndex, totalCount }: TopProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <ArticleList blogs={blogs} />
      <Pager totalCount={totalCount} pageIndex={pageIndex} />
    </div>
  );
}
export default Top;
