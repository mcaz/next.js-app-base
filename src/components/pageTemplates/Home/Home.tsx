import { TEMPLATE_NAME } from './Home.const';
import { s } from './Home.styles';
import E from '~/components/elements';
import { useInfo } from '~/hooks/pageTemplate';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

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
      HOME
    </E.Container>
  );
};

export default PageTemplate;
