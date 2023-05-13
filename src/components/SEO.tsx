import Head from "next/head";

export const SEO = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | app name</title>
    </Head>
  );
};
