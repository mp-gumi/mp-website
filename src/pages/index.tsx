import Top, { BlogProps, TopProps } from "components/Top";
import { client } from "../../libs/client";
import { GetStaticProps } from "next";

type PagesProps = {
  blogs: BlogProps[];
  totalCount: number;
};

function Pages({ blogs, totalCount }: PagesProps): JSX.Element {
  return <Top blogs={blogs} totalCount={totalCount} />;
}

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default Pages;
