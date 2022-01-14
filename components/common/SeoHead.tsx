import { DefaultSeo } from "next-seo";
import NextHead from "next/head";
import config from "../../config/seo.json";

const SeoHead = () => {
  return (
    <>
      <DefaultSeo {...config} />

      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="author" content="Wecover" />
        <meta name="theme-color" content="#5C00FF" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  );
};

export default SeoHead;
