import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import allProducts from "../allProducts";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Console Store</title>
      </Head>
      <header>
        <Navbar />
        <allProducts />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
