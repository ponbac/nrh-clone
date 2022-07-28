import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
    <nav className="">
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
        <div className="flex flex-col items-center lg:items-end gap-4">
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
    </nav>
  );
};

export default Navbar;
