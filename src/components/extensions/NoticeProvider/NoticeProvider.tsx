import { useConfigs } from '@/hooks';
import { SnackbarProvider } from 'notistack';
import { s } from './NoticeProvider.module.styles';
import { TProps } from './NoticeProvider.module.types';

export function NoticeProvider({ children }: TProps) {
  const { configs } = useConfigs();

  return (
    <SnackbarProvider
      maxSnack={configs.app.snackbarLimit}
      classes={{ root: s.Root }}
    >
      {children}
    </SnackbarProvider>
  );
}
