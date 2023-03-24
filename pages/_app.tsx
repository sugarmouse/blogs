import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1, initial-scale=1, minimum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
