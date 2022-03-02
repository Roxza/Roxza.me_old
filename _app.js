// Css
import "../assets/css/main.css";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import Router from "next/router";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Roxza.me | Home</title>
        <link
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <NextNProgress height={3} color="#eccece" />
      <Header />
      <div className="max-w-screen-lg w-full md:py-10 md:w-20px; lg:py-22 mx-auto transition-all duration-300">
        <Component loading={loading} {...pageProps} />
      </div>

    </>
  );
}

export default MyApp;
