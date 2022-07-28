import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
