import { useResourceTableSearchForm } from './ResourceTable.hooks';

type TProps = ReturnType<typeof useResourceTableSearchForm> & {
  title: string;
};
