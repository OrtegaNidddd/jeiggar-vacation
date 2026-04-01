import type { LabeledLinkConfig } from "./Buttons";

export type NavLinkItem = LabeledLinkConfig & {
  variant?: "default" | "highlight";
  children?: never;
};

export type NavGroupItem = {
  label: string;
  children: NavLinkItem[]; 
  to?: never;
};

export type NavItem = NavLinkItem | NavGroupItem;