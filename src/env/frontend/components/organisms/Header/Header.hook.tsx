import { TUseheader } from './Header.types';
import { pageConfig } from '@/config';

export const useHeader = ({
  title,
  titleLinkPath = pageConfig.home.path,
}: TUseheader) => {
  return {
    title,
    titleLinkPath,
  };
};
