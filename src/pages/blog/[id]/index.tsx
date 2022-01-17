import Article from "components/Article";
import { blogProps } from "components/Top";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../../../libs/client";

export type IdProps = {
  blogs: blogProps;
};

function Pages(blogs: blogProps): JSX.Element {
  return (
    <div>
      <Article blogs={blogs} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map(({ id }: { id: string }) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IdProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  if (Array.isArray(params.id) || !params.id) {
    return {
      notFound: true,
    };
  }

  const data = await client.get({
    endpoint: "blog",
    contentId: params.id,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs: data,
    },
  };
};

export default Pages;
