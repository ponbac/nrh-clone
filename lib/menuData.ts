export type MenuItem = {
  title: string;
  to: string;
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
    to: "/ratt-till-utredning-och-diagnos",
  },
  { title: "Besvärsritningar", to: "/besvarsritningar" },
  { title: "Skademekanismer", to: "/skademekanismer" },
  { title: "Diagnoser A-Ö", to: "/diagnoser-a-o" },
  { title: "Ordlista", to: "/ordlista" },
  { title: "Utlandsvård", to: "/utlandsvard" },
];

export const KunskapItems = [
  { title: "NRH seminarium/seminar", to: "/nrh-seminarium-seminar" },
  { title: "Vetenskap", to: "/vetenskap" },
  {
    title: "Den s.k. traumatiska principen",
    to: "/den-s-k-traumatiska-principen",
  },
  { title: "Bok-/filmtips", to: "/" },
  { title: "Andra organisationer", to: "/andra-organisationer" },
  { title: "Länktips", to: "/" },
];

export const PaverkanItems = [
  { title: "NRHs debattartiklar", to: "/nrh-s-debattartiklar" },
  { title: "NRHs pressmeddelanden", to: "/nrh-s-pressmeddelanden" },
  { title: "NRHs brev", to: "/nrh-s-brev" },
  { title: "Skadeportalen", to: "/" },
  { title: "Överklagan alternativ tvistlösningsnämnd", to: "/" },
  { title: "Socialstyrelsen", to: "/socialstyrelsen" },
  { title: "Finansinspektionen", to: "/finansinspektionen" },
  { title: "Politik", to: "/politik" },
];

export const StodItems = [
  { title: "NRH Fondens ändamål", to: "/nrh-fondens-andamal" },
  { title: "Bli medlem", to: "/bli-medlem" },
  { title: "Bli ambassadör", to: "/bli-ambassador" },
  { title: "Gåvokort", to: "/gavokort" },
  { title: "Bli månadsgivare", to: "/bli-manadsgivare" },
  { title: "Swisha en gåva", to: "/swisha-en-gava" },
  { title: "Skänk en gåva", to: "/skank-en-gava" },
  { title: "Minnesgåva", to: "/minnesgava" },
  { title: "Företagsgåva", to: "/foretagsgava" },
  { title: "Bli sponsor", to: "/bli-sponsor" },
  { title: "Sponsorer", to: "/sponsorer" },
];

export const OmItems = [
  { title: "Föreningens ändamål", to: "/foreningens-andamal" },
  { title: "Historik", to: "/historik" },
  { title: "Stadgar", to: "/stadgar" },
  { title: "Årsredovisning", to: "/arsredovisning" },
  { title: "Styrelse", to: "/styrelse" },
  { title: "Vetenskapligt råd", to: "/vetenskapligt-rad" },
  { title: "GDPR-policy", to: "/gdpr-policy" },
  { title: "Köpvillkor", to: "/kopvillkor" },
  { title: "Samverkan", to: "/samverkan" },
  { title: "Social media", to: "/social-media" },
  { title: "Kontakt", to: "/kontakt" },
];

export const LokalItems = [
  { title: "NRH Trauma Västerås", to: "https://vasteras.nrhtrauma.se/" },
  { title: "Bilda en lokalförening", to: "/bilda-en-lokalforening" },
  { title: "Tips/råd", to: "/tips-rad" },
  { title: "Bidrag", to: "/bidrag" },
  { title: "Blanketter", to: "/blanketter" },
];
