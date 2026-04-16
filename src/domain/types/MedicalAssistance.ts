export type MedicalAssistanceHeroContent = {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type MedicalCategoryItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
};

export type MedicalAssistanceCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

export type MedicalDisclaimerContent = {
  text: string;
};