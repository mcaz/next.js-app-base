import { AppCacheProvider as Provider } from '@mui/material-nextjs/v14-pagesRouter';
import { TProps } from './CacheProvider.module.types';

export function AppCacheProvider({ children, appProps }: TProps) {
  return <Provider {...appProps}>{children}</Provider>;
}
