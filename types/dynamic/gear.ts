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
  tech: string;
  id: string;
  sections?: Section[];
};
