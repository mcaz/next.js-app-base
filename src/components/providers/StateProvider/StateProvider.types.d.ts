export type TContext = {
  mounted: boolean;
};

export type TProvider = TContext & {
  children: TChildren;
};
