export type TContext = {
  startProgress: VoidFunction;
  doneProgress: VoidFunction;
};

export type TProvider = {
  children?: TChildren;
  router: TRouter;
};
