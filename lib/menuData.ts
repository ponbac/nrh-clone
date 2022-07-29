export type MenuItem = {
  title: string;
  to: string;
  external?: boolean;
};
export type SubMenuItem = {
  title: string;
  subItems: MenuItem[];
};

export const StartsidaItems = [
  { title: "Välkommen", to: "/" },
  { title: "Aktuellt", to: "/" },
  { title: "Kalender", to: "/" },
];

export const DiagnosItems = [
  {
    title: "Rätt till utredning och diagnos",
    to: "/page/ratt-till-utredning-och-diagnos",
  },
  { title: "Besvärsritningar", to: "/page/besvarsritningar" },
  { title: "Skademekanismer", to: "/page/skademekanismer" },
  { title: "Diagnoser A-Ö", to: "/page/diagnoser-a-o" },
  { title: "Ordlista", to: "/page/ordlista" },
  { title: "Utlandsvård", to: "/page/utlandsvard" },
];

export const KunskapItems = [
  { title: "NRH seminarium/seminar", to: "/page/nrh-seminarium-seminar" },
  { title: "Vetenskap", to: "/page/vetenskap" },
  {
    title: "Den s.k. traumatiska principen",
    to: "/page/den-s-k-traumatiska-principen",
  },
  { title: "Bok-/filmtips", to: "/" },
  { title: "Andra organisationer", to: "/page/andra-organisationer" },
  { title: "Länktips", to: "/" },
];

export const PaverkanItems = [
  { title: "NRHs debattartiklar", to: "/page/nrh-s-debattartiklar" },
  { title: "NRHs pressmeddelanden", to: "/page/nrh-s-pressmeddelanden" },
  { title: "NRHs brev", to: "/page/nrh-s-brev" },
  { title: "Skadeportalen", to: "/" },
  { title: "Överklagan alternativ tvistlösningsnämnd", to: "/" },
  { title: "Socialstyrelsen", to: "/page/socialstyrelsen" },
  { title: "Finansinspektionen", to: "/page/finansinspektionen" },
  { title: "Politik", to: "/page/politik" },
];

export const StodItems = [
  { title: "NRH Fondens ändamål", to: "/page/nrh-fondens-andamal" },
  { title: "Bli medlem", to: "/page/bli-medlem" },
  { title: "Bli ambassadör", to: "/page/bli-ambassador" },
  { title: "Gåvokort", to: "/page/gavokort" },
  { title: "Bli månadsgivare", to: "/page/bli-manadsgivare" },
  { title: "Swisha en gåva", to: "/page/swisha-en-gava" },
  { title: "Skänk en gåva", to: "/page/skank-en-gava" },
  { title: "Minnesgåva", to: "/page/minnesgava" },
  { title: "Företagsgåva", to: "/page/foretagsgava" },
  { title: "Bli sponsor", to: "/page/bli-sponsor" },
  { title: "Sponsorer", to: "/page/sponsorer" },
];

export const OmItems = [
  { title: "Föreningens ändamål", to: "/page/foreningens-andamal" },
  { title: "Historik", to: "/page/historik" },
  { title: "Stadgar", to: "/page/stadgar" },
  { title: "Årsredovisning", to: "/page/arsredovisning" },
  { title: "Styrelse", to: "/page/styrelse" },
  { title: "Vetenskapligt råd", to: "/page/vetenskapligt-rad" },
  { title: "GDPR-policy", to: "/page/gdpr-policy" },
  { title: "Köpvillkor", to: "/page/kopvillkor" },
  { title: "Samverkan", to: "/page/samverkan" },
  { title: "Social media", to: "/page/social-media" },
  { title: "Kontakt", to: "/page/kontakt" },
];

export const LokalItems = [
  {
    title: "NRH Trauma Västerås",
    to: "https://vasteras.nrhtrauma.se/",
    external: true,
  },
  { title: "Bilda en lokalförening", to: "/page/bilda-en-lokalforening" },
  { title: "Tips/råd", to: "/page/tips-rad" },
  { title: "Bidrag", to: "/page/bidrag" },
  { title: "Blanketter", to: "/page/blanketter" },
];
