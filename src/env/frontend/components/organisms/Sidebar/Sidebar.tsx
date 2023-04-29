import { C } from '@/controls';
import { E } from '@/electrons';
import { useRender } from '@/hooks/react';

import { s } from './Sidebar.styles';
import { TProps } from './Sidebar.types';

export const Sidebar: TFC<TProps> = ({ items }) => {
  const { c, style, key } = useRender();

  return (
    <E.Container component={E.List} className={s.Sidebar}>
      <C.Repeater component={E.ListItem} className={s.Item}>
        {items.map(({ label, href, current }) => {
          return (
            <E.Button key={key.value} className={s.Button}>
              <E.Anchor
                href={href}
                className={c(s.Anchor, style(s.Anchor_current, current))}
              >
                {label}
              </E.Anchor>
            </E.Button>
          );
        })}
      </C.Repeater>
    </E.Container>
  );
};
