export type TransportHeroContent = {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type TransportItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
};

export type TransportCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

export type TransportLegalContent = {
  text: string;
};