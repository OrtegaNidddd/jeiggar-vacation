export type NavLinkItem = {
  label: string;
  to: string;
  variant?: "default" | "highlight";
  children?: never;
};

export type NavGroupItem = {
  label: string;
  children: NavLinkItem[]; 
  to?: never;
};

export type NavItem = NavLinkItem | NavGroupItem;