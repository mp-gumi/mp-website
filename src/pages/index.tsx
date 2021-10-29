import Top, { TopProps } from "components/Top";
import { client } from "../../libs/client";
import { GetStaticProps } from "next";

export type PagesProps = Pick<TopProps, "blogs">;

function Pages({ blogs }: PagesProps): JSX.Element {
  return <Top blogs={blogs} />;
}

export const getStaticProps: GetStaticProps<PagesProps> = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Pages;
