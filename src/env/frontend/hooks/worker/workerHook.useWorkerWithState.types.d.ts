export type TProps<T> = {
  worker: Worker;
  initialState?: T;
  onReceive: (ctx: {
    data: unknown;
    state: T;
    setState: TDispatchStateAction<T>;
  }) => void;
  onPost: (ctx: {
    data: unknown;
    state: T;
    setState: TDispatchStateAction<T>;
    post: (data: unknown) => void;
  }) => void;
};
