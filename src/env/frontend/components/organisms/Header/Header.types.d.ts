export type TProps = {
  title: string;
  titleLinkPath: string;
};

export type TUseheader = Omit<TProps, 'titleLinkPath'> & {
  titleLinkPath?: string;
};
