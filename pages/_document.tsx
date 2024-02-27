import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
          rel="stylesheet"
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      </Head>
      <body>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
