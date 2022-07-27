import { ReactNode } from "react";

const Navbar = () => {
  return <div className="">NAVBAR</div>;
};

const Footer = () => {
  return <div className="">FOOTER</div>;
};

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
