import { s } from './LinkButtonList.styles';
import { TProps } from './LinkButtonList.types';
import A from '~/components/atoms';
import E from '~/components/elements';
import { useIterator } from '~/hooks/react';

export const LinkButtonList: TVFC<TProps> = ({ items }) => {
  const { uidIterator } = useIterator();

  return (
    <E.Container
      components={{
        Root: E.List,
        Division: E.ListItem,
      }}
      classes={{
        Root: s.List,
        Division: s.ListItem,
      }}
    >
      {items.map(({ path, label }) => {
        return (
          <E.Anchor key={uidIterator.next().value} href={path}>
            <A.Button>{label}</A.Button>
          </E.Anchor>
        );
      })}
    </E.Container>
  );
};

export default LinkButtonList;
