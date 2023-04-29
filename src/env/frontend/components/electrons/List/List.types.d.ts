import { OrderList, UnorderList } from '@/electrons/__shared__';

export type TProps<T = TIntrinsicElements> = T[
  | OrderListProps
  | UnorderListProps] & {
  component?: T['ul' | 'ol'] | OrderList | UnorderList;
  children: TChildren;
  className?: string;
};

type OrderListProps = TComponentProps<typeof OrderList>;
type UnorderListProps = TComponentProps<typeof UnorderList>;
