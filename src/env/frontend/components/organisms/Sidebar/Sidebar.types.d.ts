export type TProps = {
  items: TItem[];
};

export type TItem = {
  label: string;
  href: TUrlObject;
  current: boolean;
};
