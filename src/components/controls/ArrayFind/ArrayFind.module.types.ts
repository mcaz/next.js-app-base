export type TProps<T> = {
  array?: T[];
  render: (item: T, ctx: { array: T[] }) => React.ReactNode;
  condition: (item: T, ctx: { index: number; array: T[] }) => boolean;
};
