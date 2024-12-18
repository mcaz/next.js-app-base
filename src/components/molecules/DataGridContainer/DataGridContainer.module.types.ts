import { Button } from '@/components/atoms';

export type TProps = {
  children: Children;
  title: string;
  isLoading: boolean;
  actionButtons?: (Omit<TButton, 'onClick' | 'label'> & {
    onClick: () => Promise<void>;
    label: string;
  })[];
  slots?: {
    select?: ReactNode;
    panel?: ReactNode;
  };
};

type TButton = ComponentProps<typeof Button>;
