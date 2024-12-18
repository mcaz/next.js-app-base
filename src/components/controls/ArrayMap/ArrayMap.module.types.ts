export type TProps<T> = {
  array?: T[];
  render: (item: T, ctx: { index: number; array: T[] }) => React.ReactNode;
};
