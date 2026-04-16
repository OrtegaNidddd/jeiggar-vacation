export type ConnectivityHeroContent = {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ConnectivityGridContent = {
  title: string;
  description: string;
};

export type ConnectivityItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  plans: string[];
};

export type ConnectivityCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

export type ConnectivityLegalContent = {
  text: string;
};