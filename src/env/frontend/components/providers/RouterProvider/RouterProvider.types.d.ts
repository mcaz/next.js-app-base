export type TContext = {
  router: TRouter;
};

export type TProvider = TContext & {
  children?: TChildren;
};
