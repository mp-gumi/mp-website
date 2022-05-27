import Article from "components/Article";
import { BlogProps } from "components/Top";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { client } from "../../../../libs/client";

import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/felipec.css";

type IdProps = BlogProps & { prevId: string; nextId: string };

function Id({
  body,
  id,
  nextId,
  prevId,
  publishDate,
  thumbnail,
  title,
}: IdProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={`${title}｜mp-blog`}
        description={body}
        openGraph={{
          url: "",
          title: "",
          description: "",
          images: [
            {
              url: thumbnail ? thumbnail.url : "",
              width: 800,
              height: 600,
              alt: "サムネイル",
              type: "image/jpg",
            },
          ],
        }}
        twitter={{
          handle: "@mp_gumi",
          cardType: "summary",
        }}
      />
      <Article
        body={body}
        id={id}
        nextId={nextId}
        prevId={prevId}
        publishDate={publishDate}
        title={title}
      />
    </>
  );
}

const getAllContents = async (limit = 10, offset = 0): Promise<BlogProps[]> => {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      offset,
      limit,
    },
  });
  if (data.offset + data.limit < data.totalCount) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const contents = await getAllContents(data.limit, data.offset + data.limit);
    return [...data.contents, ...contents];
  }
  return data.contents;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allContents = await getAllContents();
  const paths = allContents.map(({ id }: { id: string }) => ({
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

  const blog = await client.get({
    endpoint: "blog",
    contentId: params.id,
  });

  if (!blog) {
    return {
      notFound: true,
    };
  }

  const allContents = await getAllContents();
  const index = allContents.findIndex(
    (content: BlogProps) => content.id === params.id
  );

  if (!allContents) {
    return {
      notFound: true,
    };
  }
  const nextIndex = index === 0 ? 0 : index - 1;
  const prevIndex =
    index === allContents.length - 1 ? allContents.length - 1 : index + 1;
  const prevId = allContents[prevIndex].id;
  const nextId = allContents[nextIndex].id;

  const $ = cheerio.load(blog.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      body: $.html(),
      id: blog.id,
      nextId,
      prevId,
      publishDate: blog.publishDate ? blog.publishDate : null,
      thumbnail: blog.thumbnail ? blog.thumbnail : null,
      title: blog.title,
    },
  };
};

export default Id;
