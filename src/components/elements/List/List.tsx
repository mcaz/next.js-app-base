import { TProps } from './List.types';
import { OrderList, UnorderList } from '~/components/elements/__bases__';

export const List: TVFC<TProps> = ({
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

export default List;
