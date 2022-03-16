/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const anchorStyle = css`
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  margin: 24px auto;
  padding: 4px;
  text-decoration: none;
`;

function NotFound(): JSX.Element {
  const { windowHeight } = useWindowSize();
  return (
    <div css={wrapperStyle} style={{ height: windowHeight }}>
      <div>ページが見つかりませんでした</div>
      <Link href={"/"}>
        <a css={anchorStyle}>トップに戻る</a>
      </Link>
    </div>
  );
}

export default NotFound;
