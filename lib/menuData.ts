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
  { title: "NRHs debattartiklar", to: "/" },
  { title: "NRHs pressmeddelanden", to: "/" },
  { title: "NRHs brev", to: "/" },
  { title: "Skadeportalen", to: "/" },
  { title: "Överklagan alternativ tvistlösningsnämnd", to: "/" },
  { title: "Socialstyrelsen", to: "/" },
  { title: "Finansinspektionen", to: "/" },
  { title: "Politik", to: "/" },
];

export const StodItems = [
  { title: "NRH Fondens ändamål", to: "/" },
  { title: "Bli medlem", to: "/" },
  { title: "Bli ambassadör", to: "/" },
  { title: "Gåvokort", to: "/" },
  { title: "Bli månadsgivare", to: "/" },
  { title: "Swisha en gåva", to: "/" },
  { title: "Skänk en gåva", to: "/" },
  { title: "Minnesgåva", to: "/" },
  { title: "Företagsgåva", to: "/" },
  { title: "Bli sponsor", to: "/" },
  { title: "Sponsorer", to: "/" },
];

export const OmItems = [
  { title: "Föreningens ändamål", to: "/" },
  { title: "Historik", to: "/" },
  { title: "Stadgar", to: "/" },
  { title: "Årsredovisning", to: "/" },
  { title: "Styrelse", to: "/" },
  { title: "Vetenskapligt råd", to: "/" },
  { title: "GDPR-policy", to: "/" },
  { title: "Köpvillkor", to: "/" },
  { title: "Samverkan", to: "/" },
  { title: "Social media", to: "/" },
  { title: "Kontakt", to: "/" },
];

export const LokalItems = [
  { title: "NRH Trauma Västerås", to: "/" },
  { title: "Bilda en lokalförening", to: "/" },
  { title: "Tips/råd", to: "/" },
  { title: "Bidrag", to: "/" },
  { title: "Blanketter", to: "/" },
];
