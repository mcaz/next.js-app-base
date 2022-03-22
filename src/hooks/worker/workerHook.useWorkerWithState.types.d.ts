export type TProps<T> = {
  worker: Worker;
  initialState?: T;
  receiveHandler: (ctx: {
    data: unknown;
    state: T;
    setState: Dispatch<SetStateAction<T>>;
  }) => void;
  postHandler: (ctx: {
    data: unknown;
    state: T;
    setState: Dispatch<SetStateAction<T>>;
    post: (data: unknown) => void;
  }) => void;
};
