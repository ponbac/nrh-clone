import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";
import { FaAngleDoubleRight } from "react-icons/fa";

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

const NewsSection = () => {
  const Article = (props: {
    title: string;
    subTitle: string;
    content: string;
    link: string;
  }) => {
    return (
      <div className="p-2">
        <h1 className="text-4xl">{props.title}</h1>
        <h3 className="text-2xl">{props.subTitle}</h3>
        <p className="">{props.content}</p>
        <button className="flex flex-row items-center justify-center py-2 bg-blue-500 hover:bg-blue-700 rounded-sm text-white transition-all w-full">
          <FaAngleDoubleRight />
          <Link href={props.link}>
            <a className="ml-2 tracking-wider">LÄS MER</a>
          </Link>
        </button>
      </div>
    );
  };

  return (
    <section className="grid grid-cols-3 gap-x-20 gap-y-8 py-8 px-32">
      <Article
        title="2022-04-21, Öppet brev till Statsrådet Lena Hallengren, socialminister."
        subTitle="Inledning: Stort behov av ett nationellt centrum!"
        content="Med anledning av att det nyligen var Världshälsodagen 7 april vill vi uppmärksamma personer som drabbats av symptomgivande instabilitet i halskotpelaren och kraniocervikala övergången.

        Distorsionsvåld mot övre halsryggen och/eller våld mot huvudet, särskilt hos personer med genetisk försvagning av stödjevävnaden, som vid Ehlers-Danlos syndrom (EDS) eller hypermobilitets-spektrumstörning (HSD), kan orsaka en mängd symptom och organstörningar associerade till påverkan av det centrala nervsystemet. Patienter med dessa skador får idag inte adekvat utredning och diagnostik i Sverige och erbjuds därför inte heller rätt behandling. Kunskapsbristen medför att de negligeras och till och med diskrimineras av sjukvården, Försäkringskassan och försäkringsbolagen. De ställs därför utan hjälp, trots svåra funktionsnedsättningar. De saknar hemvist inom hälso- och sjukvården. För att råda bot på problemet behövs ett kunskapscentrum som kan handlägga, registrera, bedriva forskning och i förlängningen ge fortbildning till sjukvårdspersonal inom detta högspecialiserade område.
        
        //NRH Traumas riks styrelse och vetenskapliga råd samt EDS/HSD-föreningens styrelse."
        link="https://www.nrhtrauma.se/wp-content/uploads/2022/04/2022-04-21-Oppet-brev-till-statsrad-Lena-Hallengren-S-socialminister-NRH-o-EDS_HSD.pdf"
      />
      <Article
        title="Titel"
        subTitle="Rubrik"
        content="Lorem ipsum vingardium leviosa."
        link="/page/wubba"
      />
      <Article
        title="Titel"
        subTitle="Rubrik"
        content="Lorem ipsum vingardium leviosa."
        link="/page/wubba"
      />
      <Article
        title="Titel"
        subTitle="Rubrik"
        content="Lorem ipsum vingardium leviosa."
        link="/page/wubba"
      />
      <Article
        title="Titel"
        subTitle="Rubrik"
        content="Lorem ipsum vingardium leviosa."
        link="/page/wubba"
      />
      <Article
        title="Titel"
        subTitle="Rubrik"
        content="Lorem ipsum vingardium leviosa."
        link="/page/wubba"
      />
    </section>
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
          <NewsSection />
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
