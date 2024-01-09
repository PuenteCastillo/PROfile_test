type NavItem = {
  key?: string;
  name: string;
  route: string;
  children?: Array<NavItem>;
  divider?: boolean;
  icon?: ReactNode;
};
