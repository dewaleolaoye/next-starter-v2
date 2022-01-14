import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/THICCCBOI-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/THICCCBOI-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/THICCCBOI-ExtraBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/THICCCBOI-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/THICCCBOI-SemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/wecover.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
