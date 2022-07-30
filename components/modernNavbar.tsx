import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DiagnosItems,
  KunskapItems,
  LokalItems,
  OmItems,
  PaverkanItems,
  StartsidaItems,
  StodItems,
} from "../lib/menuData";

const TopSection = () => {
  const NavButton = (props: { text: string; to: string }) => {
    return (
      <Link href={props.to}>
        <a>
          <button className="text-center font-bold text-sm w-48 p-2 bg-gray-300 rounded-lg hover:bg-gray-400 hover:text-orange-500 transition-all">
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
            priority={true}
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center lg:items-end gap-4 py-4 lg:py-0">
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
        <div className="flex flex-col items-center justify-center lg:flex-row gap-2">
          <NavButton
            text="Enkät"
            to="https://nrhtrauma.se/nrh-trauma-enkatundersokning-survey-september-2020/"
          />
          <NavButton
            text="Bli medlem i föreningen"
            to="/page/bli-medlem-i-nrh-bankkort"
          />
          <NavButton
            text="Dela din berättelse"
            to="https://docs.google.com/forms/d/e/1FAIpQLSfEeZU3x7hBhrRIHLQpRYm19ck_e80nv3eQXp2iNGfxoNHOFg/viewform"
          />
          <NavButton text="Skänk en gåva" to="/page/skank-en-gava/" />
        </div>
      </div>
    </div>
  );
};

const NavMenu = () => {
  const router = useRouter();

  const SubMenu = (props: {
    title: string;
    subItems: any[];
    isMobile?: boolean;
  }) => {
    const { title, subItems, isMobile = false } = props;

    return (
      <li tabIndex={0}>
        <a
          className={`justify-between ${
            title == "Startsida" && router.pathname == "/"
              ? "text-orange-500"
              : ""
          }`}
        >
          {title}
          {isMobile ? (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          ) : (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          )}
        </a>
        <ul className="p-0 bg-white divide-y border border-orange-500">
          {subItems.map((item, index) => {
            return (
              <li key={index} className={"hover:bg-gray-200"}>
                <Link href={item.to}>
                  <a target={item.external ? "_blank" : ""}>
                    {item.title ?? ""}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  };

  return (
    <div className="navbar bg-base-100 tracking-wide">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
          >
            <SubMenu
              title="Startsida"
              subItems={StartsidaItems}
              isMobile={true}
            />
            <SubMenu
              title="Diagnosticering/Diagnoser"
              subItems={DiagnosItems}
              isMobile={true}
            />
            <SubMenu
              title="Kunskapsspridning"
              subItems={KunskapItems}
              isMobile={true}
            />
            <SubMenu
              title="Påverkansarbete"
              subItems={PaverkanItems}
              isMobile={true}
            />
            <SubMenu title="Stöd oss" subItems={StodItems} isMobile={true} />
            <SubMenu title="Om oss" subItems={OmItems} isMobile={true} />
            <SubMenu
              title="Lokalförening"
              subItems={LokalItems}
              isMobile={true}
            />
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <SubMenu
            title="Startsida"
            subItems={StartsidaItems}
            isMobile={false}
          />
          <SubMenu
            title="Diagnosticering/Diagnoser"
            subItems={DiagnosItems}
            isMobile={false}
          />
          <SubMenu
            title="Kunskapsspridning"
            subItems={KunskapItems}
            isMobile={false}
          />
          <SubMenu
            title="Påverkansarbete"
            subItems={PaverkanItems}
            isMobile={false}
          />
          <SubMenu title="Stöd oss" subItems={StodItems} isMobile={false} />
          <SubMenu title="Om oss" subItems={OmItems} isMobile={false} />
          <SubMenu
            title="Lokalförening"
            subItems={LokalItems}
            isMobile={false}
          />
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

const ModernNavbar = () => {
  return (
    <nav className="divide-y divide-gray-200">
      <TopSection />
      <NavMenu />
    </nav>
  );
};

export default ModernNavbar;
