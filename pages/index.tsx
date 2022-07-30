import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env["HOST"]}/data/home-news.json`);

  try {
    const data = await res.json();
    return {
      props: {
        articles: data,
      },
      revalidate: 60 * 30,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        articles: [],
      },
      revalidate: 60 * 30,
    };
  }
};

const WelcomeSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center text-center space-y-8 bg-cover bg-center w-full h-[40rem]"
      style={{
        backgroundImage: "url(/images/welcome-image.webp)",
        boxShadow: "inset 0 0 0 1000px rgba(200,200,200,.8)",
        textShadow: "1px 1px gray",
      }}
    >
      <h2 className="text-4xl font-bold">VÄLKOMMEN TILL</h2>
      <h1 className="text-6xl font-bold">NRH TRAUMA RIKS</h1>
      <h3 className="text-2xl">NACK-, RYGG- & HJÄRNSKADADES RÄTT!</h3>
    </section>
  );
};

type ArticleData = {
  title: string;
  subTitle: string;
  content: string;
  link: string;
};
const NewsSection = (props: { articles: ArticleData[] }) => {
  const Article = (props: { article: ArticleData }) => {
    const { article } = props;
    return (
      <div className="p-2 space-y-4">
        <h1 className="text-3xl">{article.title}</h1>
        <h3 className="text-xl">{article.subTitle}</h3>
        <p className="whitespace-pre-wrap ">{article.content}</p>
        <Link href={article.link}>
          <a>
            <button className="mt-4 flex flex-row items-center justify-center py-2 bg-blue-500 hover:bg-blue-700 rounded-sm text-white transition-all w-full">
              <FaAngleDoubleRight />
              <p className="ml-2 tracking-wider">LÄS MER</p>
            </button>
          </a>
        </Link>
      </div>
    );
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 py-8 px-4 lg:px-32">
      {props.articles.map((a, i) => (
        <Article key={i} article={a} />
      ))}
    </section>
  );
};

const Home: NextPageWithLayout = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <NewsSection articles={articles} />
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
