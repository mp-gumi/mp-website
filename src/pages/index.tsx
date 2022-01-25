import Top, { BlogProps, TopProps } from "components/Top";
import { client } from "../../libs/client";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

type PagesProps = {
  blogs: BlogProps[];
  pageIndex: number;
  totalCount: number;
};

function Pages({ blogs, pageIndex, totalCount }: PagesProps): JSX.Element {
  return (
    <>
      <NextSeo
        title="ブログトップ"
        description="私のブログのトップページです"
      />
      <Top blogs={blogs} pageIndex={pageIndex} totalCount={totalCount} />
    </>
  );
}

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
      pageIndex: 1,
      totalCount: data.totalCount,
    },
  };
};

export default Pages;
