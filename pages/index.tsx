import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>NRH Trauma</title>
        <meta name="description" content="NRH Trauma clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>INDEX</main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
