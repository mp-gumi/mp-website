import NotFound from "components/NotFound";
import { NextSeo } from "next-seo";

function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title="ページが見つかりませんでした" />
      <NotFound />
    </>
  );
}

export default Custom404;
