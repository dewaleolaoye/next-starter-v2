import type { AppProps } from "next/app";
import { Layout, SeoHead } from "components";
import "/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
