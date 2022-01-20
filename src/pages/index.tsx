import Top, { TopProps } from "components/Top";
import { client } from "../../libs/client";
import { GetStaticProps } from "next";

function Pages({ blogs }: TopProps): JSX.Element {
  return <Top blogs={blogs} />;
}

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Pages;
