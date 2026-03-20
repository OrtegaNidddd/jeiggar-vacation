import type { LabeledLinkConfig } from "./Buttons";

export type FooterLink = LabeledLinkConfig;

export type FooterSection = { 
    title: string; 
    links: FooterLink[] 
};
