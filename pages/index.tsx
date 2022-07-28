import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";

const WelcomeSection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center space-y-8 bg-cover bg-center w-full h-[40rem]"
      style={{
        backgroundImage:
          "url(https://nrhtrauma.se//wp-content/uploads/2019/12/CCJ-Tornn-ligs.jpg)",
        boxShadow: "inset 0 0 0 1000px rgba(200,200,200,.8)",
        textShadow: "1px 1px gray",
      }}
    >
      <h2 className="text-4xl font-bold">VÄLKOMMEN TILL</h2>
      <h1 className="text-6xl font-bold">NRH TRAUMA RIKS</h1>
      <h3 className="text-2xl">NACK-, RYGG- & HJÄRNSKADADES RÄTT!</h3>
    </div>
  );
};

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>NRH Trauma</title>
        <meta name="description" content="NRH Trauma clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col min-w-full justify-center items-center">
          <WelcomeSection />
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
