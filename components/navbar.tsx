import Image from "next/image";
import Link from "next/link";

const TopSection = () => {
  const NavButton = (props: { text: string; to: string }) => {
    return (
      <Link href={props.to}>
        <a>
          <button className="font-bold text-sm w-48 p-2 bg-gray-300 rounded-lg hover:bg-gray-400 hover:text-orange-500 transition-all">
            {props.text}
          </button>
        </a>
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-24">
      <Link href="/">
        <a>
          <Image
            className=""
            src="/images/nrh-logo.png"
            alt="Swish QR kod (9005323)"
            width="230"
            height="146"
            layout="fixed"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center lg:items-end gap-4 py-4 lg:py-0">
        <Link href="http://www.insamlingskontroll.se/">
          <a target="_blank">
            <Image
              className=""
              src="/images/insamlingskontroll.png"
              alt="Swish QR kod (9005323)"
              width="121"
              height="30"
              layout="fixed"
            />
          </a>
        </Link>
        <div className="flex flex-col lg:flex-row gap-2">
          <NavButton
            text="Enkät"
            to="https://nrhtrauma.se/nrh-trauma-enkatundersokning-survey-september-2020/"
          />
          <NavButton
            text="Bli medlem i föreningen"
            to="https://nrhtrauma.se/nrh-trauma-enkatundersokning-survey-september-2020/"
          />
          <NavButton
            text="Dela din berättelse"
            to="https://docs.google.com/forms/d/e/1FAIpQLSfEeZU3x7hBhrRIHLQpRYm19ck_e80nv3eQXp2iNGfxoNHOFg/viewform"
          />
          <NavButton
            text="Skänk en gåva"
            to="https://www.nrhtrauma.se/skank-en-gava/"
          />
        </div>
      </div>
    </div>
  );
};

const NavMenu = () => {
  const MenuLink = (props: { to: string; text: string; active?: boolean }) => {
    return (
      <Link href={props.to}>
        <a>
          <p
            className={`${
              props.active ? "text-orange-400" : ""
            } text-lg font-bold hover:text-orange-400 transition-all`}
          >
            {props.text}
          </p>
        </a>
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center py-2">
      <MenuLink to="/" text="Startsida" active={true} />
      <MenuLink to="/" text="Diagnosticering/Diagnoser" />
      <MenuLink to="/" text="Kunskapsspridning" />
      <MenuLink to="/" text="Påverkansarbete" />
      <MenuLink to="/" text="Stöd oss" />
      <MenuLink to="/" text="Om oss" />
      <MenuLink to="/" text="Lokalförening" />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="divide-y">
      <TopSection />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
