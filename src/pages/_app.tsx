/* eslint-disable import/order */
import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
// import { ToastContainer } from 'react-toastify';
// import { useEffect } from 'react';
// import AOS from 'aos';

import defaultMeta from '@/constants/meta';
import '../styles/globals.css';
// import 'react-toastify/dist/ReactToastify.css';

// import 'aos/dist/aos.css';

import theme from '@/constants/theme';
import Layout from '@/components/Layout';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const meta = { ...defaultMeta, ...pageProps.meta };

  // useEffect(() => {
  //   AOS.init({
  //     easing: 'ease-out-cubic',
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <title>{meta.title}</title>
        <meta
          name='keywords'
          content={meta.keywords}
        />
        <meta
          name='description'
          content={meta.description}
        />
        <link
          rel='icon'
          href={meta.faviconPath}
        />
        <link
          rel='canonical'
          href={process.env.NEXT_PUBLIC_SITE_URL}
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* <ToastContainer /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
