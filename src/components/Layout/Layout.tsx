import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar title="GitHub Searcher" />

      <main> {children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
