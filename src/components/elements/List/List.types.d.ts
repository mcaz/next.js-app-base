import { OrderList, UnorderList } from '~/components/elements/__bases__';

export type TProps<T = TIntrinsicElements> = T[
  | OrderListProps
  | UnorderListProps] & {
  component?: T['ul' | 'ol'] | OrderList | UnorderList;
  children: TChildren;
  className?: string;
};

type OrderListProps = TComponentProps<typeof OrderList>;
type UnorderListProps = TComponentProps<typeof UnorderList>;
