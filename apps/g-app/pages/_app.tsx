import { AppProps } from 'next/app';
import Head from 'next/head';
import './reset.css';

function CustomApp({ Component, pageProps }: AppProps) {
  // TODO GCL : i18n
  return (
    <>
      <Head>
        <title>{pageProps?.title || 'Welcome g-app'}</title>
      </Head>
      <main className='app'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
