import { Icons } from '@/components/icons';

export type TProps = PropsWithChildren<{
  items: TItemProps[];
}>;

export type TItemProps = TItemWithoutChildrenProps | TItemWithChildrenProps;

type TItemBaseProps = {
  id: string;
  nest?: number;
  primary: string;
  icon?: ReactNode;
  disabled?: boolean;
  highlight?: boolean;
};

type TItemWithoutChildrenProps = TItemBaseProps & {
  onClickItem: (currentId: string) => void;
  children?: undefined;
};

type TItemWithChildrenProps = TItemBaseProps & {
  onClickItem?: undefined;
  children: TItemProps[];
};
