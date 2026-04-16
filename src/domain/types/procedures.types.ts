export type ProceduresHeroContent = {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ProceduresCountryItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
};

export type ProceduresBenefitItem = {
  id: string;
  title: string;
  description: string;
};

export type ProceduresProcessItem = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type ProceduresCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

export type ProceduresLegalContent = {
  text: string;
};