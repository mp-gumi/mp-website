import type { AppProps } from "next/app";
import "ress";
import { ThemeProvider } from "@mui/material";
import theme from "style";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
