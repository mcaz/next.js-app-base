import { pageConfig } from '@/config';

import { TUseheader } from './Header.types';

export const useHeader = ({
  title,
  titleLinkPath = pageConfig.home.path,
}: TUseheader) => {
  return {
    title,
    titleLinkPath,
  };
};
