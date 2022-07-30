import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

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

const GiftSection = () => {
  return (
    <div className="bg-[#F3803B] w-full text-white flex flex-row items-center py-4 px-4 lg:px-28">
      <div className="flex flex-col flex-1">
        <p>
          Vänligen, ge en gåva till förmån för Nack-, Rygg- och Hjärnskadades
          rätt.
        </p>
        <p>Gör din insättning på NRH Trauma Riks 90-konto via:</p>
        <p>
          Pg: <strong>900 532-3</strong> | Bg: <strong>900-5323</strong> |
          Swish: <strong>900 53 23</strong>
        </p>
        <Link href="/page/nrh-fondens-andamal-2/">
          <a className="font-bold text-lg hover:underline">
            För mer information om NRH Trauma Riks 90-konto klicka här {">"}
            {">"}
          </a>
        </Link>
      </div>
      <div>
        <Image
          src="/images/swish-qr-200x200.png"
          alt="Swish QR (9005323)"
          width="120"
          height="120"
          className="rounded-lg"
        />
        <p className="text-sm text-center">QR-kod: 9005323</p>
      </div>
    </div>
  );
};

const InfoSection = () => {
  const FolderButton = (props: { link: string; text: string }) => {
    return (
      <Link href={props.link}>
        <a
          className="p-2 w-full bg-[#3F7CCD] hover:bg-blue-700 text-center rounded-md transition-all"
          target="_blank"
        >
          <button>
            <div className="flex items-center">
              <p className="font-bold">{props.text}</p>
              <FaAngleDoubleRight className="text-white ml-2" />
            </div>
          </button>
        </a>
      </Link>
    );
  };

  return (
    <section className="w-full">
      <div>
        <div className="w-header">
          <div className="text-lg flex flex-col items-center p-4">
            <div className="bg-black/70 lg:w-1/2 p-6 rounded-xl shadow-md shadow-black">
              <h1 className="text-5xl text-center">NRH Trauma</h1>
              <h2 className="italic text-2xl text-center">
                Nack-, rygg- och hjärnskadades rätt
              </h2>
              <div className="flex flex-col text-left space-y-4 pt-4 text-lg">
                <p className="">
                  NRH stödjer forskning, utbildning och spridning av kunskap om
                  skador som kan uppstå efter våld mot kotpelare och huvud.
                  Skador som alltför ofta medför bestående och invalidiserande
                  besvär.
                </p>
                <p>
                  NRH verkar för att upplysa politiker och andra beslutsfattare
                  om behovet av förbättrad diagnostik och mer jämställd vård för
                  de som drabbats av nack-, rygg- och/eller hjärnskada.
                  Principen om alla människors lika värde och rätt till vård
                  skall gälla.
                </p>
                <FolderButton
                  link="https://www.nrhtrauma.se/wp-content/uploads/2022/05/NRH-s-folder-svensk-version.pdf"
                  text="NRH FOLDER, SVENSK VERSION"
                />
                <FolderButton
                  link="https://www.nrhtrauma.se/wp-content/uploads/2022/05/NRH-s-folder-engelsk-version.pdf"
                  text="NRH FOLDER, ENGELSK VERSION"
                />
                <p>
                  NRH-s informationsfolder (dragspelsvikt, med första sida
                  ”Insättning på NRH Trauma Riks 90-konto via, Pg: 900 532-3,
                  Bg: 900-5323, Swish: 900 5323″) sammanfattas vårt syfte och
                  vår målsättning.
                </p>
                <p>
                  Vi är tacksamma om du vill hjälpa till med kunskapsspridning!
                  Ladda gärna ner informationsfoldern i pdf och skriv ut
                  exemplar för att ta med vid nästa läkarbesök alt. andra
                  behandlingar.
                </p>
                <p className="font-bold">
                  OBS! Informationstexten i foldern är skriven av: Dr Bo C.
                  Bertilson, dr Gunilla Bring, dr Olle Bunketorp. Bild: Ron
                  Tribell/Axis Arts. Formgivning: NRH Trauma Riks
                </p>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="w-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
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
          <a target="_blank">
            <button className="mt-4 flex flex-row items-center justify-center py-2 bg-blue-500 hover:bg-blue-700 rounded-sm text-white transition-all w-full">
              <FaAngleDoubleRight />
              <p className="ml-2 tracking-widest text-lg">LÄS MER</p>
            </button>
          </a>
        </Link>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold pt-8">Aktuellt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 py-8 px-4 lg:px-32">
        {props.articles.map((a, i) => (
          <Article key={i} article={a} />
        ))}
      </div>
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
          <GiftSection />
          <InfoSection />
          {articles.length > 0 && <NewsSection articles={articles} />}
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
