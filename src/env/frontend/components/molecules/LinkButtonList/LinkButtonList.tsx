import { s } from './LinkButtonList.styles';
import { TProps } from './LinkButtonList.types';
import { A } from '@/components/atoms';
import { E } from '@/electrons';
import { useRender } from '@/hooks/react';

export const LinkButtonList: TFC<TProps> = ({ items }) => {
  const { key } = useRender();

  return (
    <E.Container
      component={E.List}
      className={s.List}
      division={{ component: E.ListItem, className: s.ListItem }}
    >
      {items.map(({ path, label }) => {
        return (
          <E.Anchor key={key.value} href={path}>
            <A.Button>{label}</A.Button>
          </E.Anchor>
        );
      })}
    </E.Container>
  );
};
