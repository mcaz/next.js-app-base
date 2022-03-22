import M from '~/components/molecules';

export type TContext = {
  messageModal: ReturnType<typeof M.useMessageModal>;
};

export type TProvider = TContext & {
  children: TChildren;
};
