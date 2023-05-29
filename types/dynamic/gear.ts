export type GearLink = {
  seller: string;
  link: string;
};

export type Gear = {
  name: string;
  links?: GearLink[];
};

export type Section = {
  name: string;
  gear?: Gear[];
};

export type GearItem = {
  name: string;
  title: string;
  discipline: string;
  description: string;
  year: string;
  role: string;
  tech: string;
  forward: string;
  id: string;
  images: string[];
  sections?: Section[];
};
