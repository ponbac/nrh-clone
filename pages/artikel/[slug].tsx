import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Article: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>NRH Trauma - {slug}</title>
        <meta name="description" content="NRH Trauma Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  );
};

Article.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Article;
