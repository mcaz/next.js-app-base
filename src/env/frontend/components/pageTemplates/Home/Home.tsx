import { E } from '@/electrons';
import { useInfo } from '@/hooks/pageTemplate';

import { TEMPLATE_NAME } from './Home.const';
import { s } from './Home.styles';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({
    name: TEMPLATE_NAME,
    router,
  });

  return (
    <E.Container
      component={E.List}
      className={s.List}
      division={{ component: E.ListItem, className: s.ListItem }}
    >
      HOME
    </E.Container>
  );
};
