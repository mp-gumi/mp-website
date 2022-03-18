/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useCallback } from "react";

type ArticleLinkButtonsProps = {
  id: string;
  nextId: string;
  prevId: string;
};

const otherArticleLinkStyle = css`
  color: #000;
  text-decoration: none;
`;
const wrapperStyle = css`
  text-align: center;
`;
const innerStyle = css`
  display: flex;
  justify-content: space-between;
  margin: 12px 20px 20px;
`;
const topLinkStyle = css`
  padding: 8px 0 0;
  text-decoration: none;
  .MuiButton-root {
    border: 1px solid #828282;
  }
`;

function ArticleLinkButtons({
  id,
  nextId,
  prevId,
}: ArticleLinkButtonsProps): JSX.Element {
  const prevArticleLink = useCallback((id: string, prevId: string) => {
    if (id === prevId) return <div />;

    return (
      <Link href={`/blog/${prevId}`}>
        <a css={otherArticleLinkStyle}>
          <Button variant="contained" color="primary">
            １つ前の記事へ
          </Button>
        </a>
      </Link>
    );
  }, []);

  const nextArticleLink = useCallback((id: string, nextId: string) => {
    if (id === nextId) return <div />;

    return (
      <Link href={`/blog/${nextId}`}>
        <a css={otherArticleLinkStyle}>
          <Button variant="contained" color="primary">
            １つ次の記事へ
          </Button>
        </a>
      </Link>
    );
  }, []);
  return (
    <div css={wrapperStyle}>
      <div css={innerStyle}>
        {nextArticleLink(id, nextId)}
        {prevArticleLink(id, prevId)}
      </div>
      <Link href="/">
        <a css={topLinkStyle}>
          <Button
            variant="outlined"
            sx={{ borderColor: "#999", color: "#828282" }}
          >
            ブログトップへ
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default ArticleLinkButtons;
