export type MedicalAssistanceHeroContent = {
  badge: string;
  title: string;
  description: string;
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
  buttonLabel: string;
  buttonHref?: string;
};

export type MedicalDisclaimerContent = {
  text: string;
};