import "../assets/css/black-dashboard-react.min.css";
import "../assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import AdminLayout from "../layouts/Admin/Admin";

import ThemeContextWrapper from "../components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "../components/BackgroundColorWrapper/BackgroundColorWrapper";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        {/*
     <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    --> 
    */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="76x76" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        {/* 
    <!--
  Notice the use of %PUBLIC_URL% in the tags above.
  It will be replaced with the URL of the `public` folder during the build.
  Only files inside the `public` folder can be referenced from the HTML.
  Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
  work correctly both with client-side routing and a non-root public URL.
  Learn how to configure a non-root public URL by running `npm run build`.
-->
<!--     Fonts and icons     --> 
*/}

        <title>Black Dashboard React by Creative Tim</title>
      </Head>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </>
  );
}

export default MyApp;
