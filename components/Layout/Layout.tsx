import { FC } from "react";
import Head from "next/head";
import Styles from "./Layout.module.scss";
import { Footer, Navbar } from "components";

const Layout: FC = ({ children }) => {
  return (
    <main>
      <Head>
        <link as="style" rel="preload" href="/styles/globals.scss" />
      </Head>

      <Navbar />

      <section className={Styles.layout}>{children}</section>

      <Footer />
    </main>
  );
};

export default Layout;
