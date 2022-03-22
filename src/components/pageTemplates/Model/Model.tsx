import { TEMPLATE_NAME } from './Model.const';
import { TResource } from './Model.types';
import E from '~/components/elements';
import O from '~/components/organisms';
import { useInfo } from '~/hooks/pageTemplate';
import { useState } from '~/hooks/react';

export const PageTemplate: TPageProps<TResource> = ({
  router,
  resource: { postDtos },
}) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const [records, setRecords] = useState(postDtos);

  const postTable = O.usePostTable({
    title: 'Post Table',

    records,

    onClickSearchButton: ({ searchText }) => {
      setRecords(postDtos.filter(({ title }) => title.includes(searchText)));
    },

    onClickClearButton: () => {
      setRecords(postDtos);
    },
  });

  return (
    <E.Container>
      <O.PostTable {...postTable} />
    </E.Container>
  );
};

export default PageTemplate;
