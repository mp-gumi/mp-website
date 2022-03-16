/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";

const wrapperStyle = css`
  height: 60px;
  margin: 0 0 10px;
  width: 100%;
`;
const innerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const anchorStyle = css`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

function Header(): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <AppBar color="primary">
        <Toolbar css={innerStyle}>
          <Link href="/">
            <a css={anchorStyle}>ブログ</a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
