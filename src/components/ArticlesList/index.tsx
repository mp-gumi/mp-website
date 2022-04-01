/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { BlogProps } from "components/Top";

type ArticleListProps = {
  blogs: BlogProps[];
};

const wrapperStyle = css`
  align-items: center;
  color: #000;
  display: flex;
  flex-direction: column;
  width: auto;
`;
const articleStyle = css`
  display: flex;
`;
const anchorStyle = css`
  background: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  margin: 8px;
  min-height: 66px;
  text-decoration: none;
  width: 300px;
  cursor: pointer;
`;
const dateStyle = css`
  color: #828282;
  font-size: 12px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin: 4px 0 0 8px;
  text-align: left;
`;
const titleStyle = css`
  color: #000;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  justify-content: center;
  margin: 0 8px 4px;
  text-align: left;
`;
const titleEllipsisStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
const thumbnailWrapperStyle = css`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  justify-content: center;
  padding: 6px;
`;

function ArticleList({ blogs }: ArticleListProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      {blogs.map(({ id, publishDate, thumbnail, title }) => (
        <div key={id} css={articleStyle}>
          <Link href={`/blog/${id}`}>
            <a css={anchorStyle}>
              <div css={dateStyle}>
                {publishDate
                  ? dayjs(publishDate).format("YYYY.MM.DD")
                  : "1970.01.01"}
              </div>
              <div css={titleStyle}>
                <span css={titleEllipsisStyle}>{title}</span>
              </div>
              {thumbnail ? (
                <div css={thumbnailWrapperStyle}>
                  <Image
                    alt="thumbnail"
                    src={thumbnail.url}
                    width="96px"
                    height="54px"
                  />
                </div>
              ) : null}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ArticleList;
