export type TProps = {
  worker: Worker;
  onReceive: (ctx: { data: unknown }) => void;
  onPost: (ctx: { data: unknown; post: (data: unknown) => void }) => void;
};
