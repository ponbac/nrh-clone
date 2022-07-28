import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Stats = () => {
  const InfoRow = (props: { text: string; icon: string; alt: string }) => {
    return (
      <div className="flex flex-row items-center space-x-1">
        <Image
          src={props.icon}
          alt={props.alt}
          width="16"
          height="16"
          layout="fixed"
        />
        <p>{props.text}</p>
      </div>
    );
  };

  return (
    <div className="space-y-4 pb-4 lg:pb-0 lg:pr-4">
      <p className="italic">
        NRH Trauma Riks – Nack-, Rygg- och Hjärnskadade efter trauma
      </p>
      <div className="border border-dotted space-y-1 p-1 divide-y divide-dotted">
        <InfoRow
          text="Visits Today: 148"
          icon="/icons/footer/today.png"
          alt="male icon"
        />
        <InfoRow
          text="Visits Yesterday: 164"
          icon="/icons/footer/yesterday.png"
          alt="male icon"
        />
        <InfoRow
          text="Total Visits: 292822"
          icon="/icons/footer/total.png"
          alt="male icon"
        />
        <InfoRow
          text="Total Hits: 434398"
          icon="/icons/footer/hits.png"
          alt="male icon"
        />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-4 lg:pt-0 lg:pl-4 pb-4 lg:pb-0">
      <h1 className="mb-4 font-bold">KONTAKT</h1>
      <div className="italic text-sm">
        <p>NRH Trauma Riks</p>
        <p>Box 4</p>
        <p className="">671 21 Arvika</p>
        <a
          href="mailto:info@nrhtrauma.se"
          className="font-bold hover:underline"
        >
          info@nrhtrauma.se
        </a>
        <p className="pt-2">Organisationsnummer: 802496 – 4085</p>
        <a
          href="https://www.nrhtrauma.se/wp-content/uploads/2020/06/NRH-Trauma-Riks-Fakta-om-oss-2020.pdf"
          className="flex flex-row items-center space-x-1 hover:underline pt-2"
        >
          <p className="font-bold text-base not-italic">Mer info</p>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="pt-4 lg:pt-0 lg:pl-4 pb-4 lg:pb-0">
      <h1 className="mb-4 font-bold">STÖD OSS</h1>
      <div className="text-sm">
        <p className="font-bold text-base">
          Insamlingskonton vid enskilda gåvor:
        </p>
        <p>Plusgiro: 900 532-3</p>
        <p>Bankgiro: 900-5323</p>
        <p>Swish: 900 532-3</p>
        <a
          href="https://www.nrhtrauma.se/bli-ambassador/"
          className="flex flex-row items-center space-x-1 hover:underline pt-2"
        >
          <p className="font-bold text-base">Så här kan du stödja oss</p>
          <BsArrowRight />
        </a>
      </div>
      <div className="flex flex-col items-center mt-4">
        <Image
          src="/images/swish-qr-200x200.png"
          alt="Swish QR kod (9005323)"
          width="200"
          height="200"
          layout="fixed"
        />
        <p className="text-sm italic">QR-kod: 9005323</p>
      </div>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center space-x-4 mt-4">
      <a
        href="https://web.facebook.com/NRHtrauma/"
        className="flex flex-row items-center space-x-1 hover:underline"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=+Personskadef%C3%B6reningen+NRH"
        className="flex flex-row items-center space-x-1 hover:underline"
      >
        <FaYoutube size={30} />
      </a>
      <a
        href="https://twitter.com/Personskadefre1"
        className="flex flex-row items-center space-x-1 hover:underline"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.instagram.com/nrh_trauma/"
        className="flex flex-row items-center space-x-1 hover:underline"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="divide-y divide-gray-600/40 bg-[#2c2d2f] text-[#8c8989]">
      <div className="grid grid-cols-1 lg:grid-cols-4 px-28 py-4 divide-y lg:divide-x lg:divide-y-0 divide-gray-600/80">
        <Stats />
        <Contact />
        <Support />
        <div className="pt-4 lg:pt-0 lg:pl-4 flex justify-center items-center">
          <Image
            src="/images/heart-gava.png"
            alt="Swish QR kod (9005323)"
            width="300"
            height="272"
            layout="fixed"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <p className="text-xs">
          © Copyright 2012 - 2022 NRH Trauma Riks – Nack-, Rygg- och
          Hjärnskadade efter trauma | Webbsidan skapad av Pontus Backman
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
