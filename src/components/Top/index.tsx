export type TopProps = {
  blogs: blogProps[];
};

type blogProps = {
  id: string;
  title: string;
  body: HTMLElement;
  publishDate: string;
  thumbnail?: thumbnailProps;
};
type thumbnailProps = {
  url: string;
  height: number;
  width: number;
};

function Top({ blogs }: TopProps): JSX.Element {
  return (
    <div>
      {blogs.map(({ id, publishDate, title }) => (
        <div key={id}>
          {title}
          {publishDate}
        </div>
      ))}
    </div>
  );
}
export default Top;
