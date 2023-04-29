import { OrderList, UnorderList } from '@/electrons/__shared__';

import { TProps } from './List.types';

export const List: TFC<TProps> = ({
  component: Component = UnorderList,
  children,
  ...props
}) => {
  if (Component === 'ol' || Component === OrderList) {
    return <OrderList {...props}>{children}</OrderList>;
  }

  if (Component === 'ul' || Component === UnorderList) {
    return <UnorderList {...props}>{children}</UnorderList>;
  }

  return <UnorderList {...props}>{children}</UnorderList>;
};
