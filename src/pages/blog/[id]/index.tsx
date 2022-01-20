import Article from "components/Article";
import { BlogProps } from "components/Top";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../../../libs/client";

function Pages({ body, publishDate, title }: BlogProps): JSX.Element {
  return <Article body={body} publishDate={publishDate} title={title} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map(({ id }: { id: string }) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
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

  const blogs = await client.get({
    endpoint: "blog",
    contentId: params.id,
  });

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      body: blogs.body,
      id: blogs.id,
      publishDate: blogs.publishDate ? blogs.publishDate : null,
      thumbnail: blogs.thumbnail ? blogs.thumbnail : null,
      title: blogs.title,
    },
  };
};

export default Pages;
