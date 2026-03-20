export type WithTitle = {
  title: string;
};

export type WithDescription = {
  description: string;
};

export type TitledContent = WithTitle & WithDescription;

export type WithImage = {
  image: string;
};

export type WithImageAlt = {
  imageAlt: string;
};

export type ImageContent = WithImage & WithImageAlt;

export type NamedImageContent = {
  name: string;
} & ImageContent;