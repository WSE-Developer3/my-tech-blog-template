import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/fontawesome.min.css";
// import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "react-sweet-progress/lib/style.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import * as React from "react";
// import { Preloader, Placeholder } from 'react-preloading-screen';

import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

import usePageView from "../src/hooks/usePageView";

import "../src/styles/global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  usePageView();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="shortcut icon" href="./imgs/logo01.png" />
        <title>パスアの開発ブログ</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
