import Head from 'next/head';

export function Layout({ title, children }) {
  // TODO GCL : i18n
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
