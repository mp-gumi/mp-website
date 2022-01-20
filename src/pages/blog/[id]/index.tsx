import Article from "components/Article";
import { BlogProps } from "components/Top";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../../../libs/client";

type PagesProps = BlogProps & { prevId: string; nextId: string };

function Pages({
  body,
  id,
  nextId,
  prevId,
  publishDate,
  title,
}: PagesProps): JSX.Element {
  return (
    <Article
      body={body}
      id={id}
      nextId={nextId}
      prevId={prevId}
      publishDate={publishDate}
      title={title}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map(({ id }: { id: string }) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PagesProps> = async ({
  params,
}) => {
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

  const data = await client.get({ endpoint: "blog" });
  const index = data.contents.findIndex(
    (content: BlogProps) => content.id === params.id
  );

  if (!data || !data.contents) {
    return {
      notFound: true,
    };
  }
  const nextIndex = index === 0 ? 0 : index - 1;
  const prevIndex =
    index === data.totalCount - 1 ? data.totalCount - 1 : index + 1;
  const prevId = data.contents[prevIndex].id;
  const nextId = data.contents[nextIndex].id;

  return {
    props: {
      body: blogs.body,
      id: blogs.id,
      nextId,
      prevId,
      publishDate: blogs.publishDate ? blogs.publishDate : null,
      thumbnail: blogs.thumbnail ? blogs.thumbnail : null,
      title: blogs.title,
    },
  };
};

export default Pages;
