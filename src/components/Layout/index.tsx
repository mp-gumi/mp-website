import Header from "components/Header";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
