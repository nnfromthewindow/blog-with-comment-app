import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <body className="bg-[url('/hero.png')] bg-cover h-screen bg-no-repeat h-full text-gray-700 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
