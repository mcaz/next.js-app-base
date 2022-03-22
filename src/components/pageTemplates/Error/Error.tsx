import { TEMPLATE_NAME } from './Error.const';
import { TResource } from './Error.types';
import { useInfo } from '~/hooks/pageTemplate';

export const PageTemplate: TPageProps<TResource> = ({ page, router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  return <>{page.meta.title}</>;
};

export default PageTemplate;
