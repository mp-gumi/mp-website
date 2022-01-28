import Top, { BlogProps, TopProps } from "components/Top";
import { client } from "../../../../../libs/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

type IndexProps = {
  blogs: BlogProps[];
  totalCount: number;
  pageIndex: number;
};

function Index({ blogs, pageIndex, totalCount }: IndexProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={`${pageIndex}ページ目｜ブログ`}
        description={`私のブログの${pageIndex}ページ目です`}
        canonical="https://mp-website-six.vercel.app/"
      />
      <Top blogs={blogs} totalCount={totalCount} pageIndex={pageIndex} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  const paths = Array(Math.ceil(data.totalCount / 10))
    .fill(0)
    .map((_, contentsIndex) => ({
      params: { index: (contentsIndex + 1).toString() },
    }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TopProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  if (!params.index || Array.isArray(params.index)) {
    return {
      notFound: true,
    };
  }

  const data = await client.get({
    endpoint: "blog",
    queries: {
      offset: (parseInt(params.index) - 1) * 10,
      limit: 10,
    },
  });

  if (!data || !data.contents) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
      pageIndex: parseInt(params.index),
    },
  };
};

export default Index;
