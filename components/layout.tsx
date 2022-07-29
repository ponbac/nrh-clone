import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer";
import ModernNavbar from "./modernNavbar";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen pt-6">
      <Head>
        <html data-theme="bumblebee"></html>
      </Head>
      <Navbar />
      {/* <ModernNavbar /> */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
