import { TResource } from './index.page.types';
import O from '~/components/organisms';
import L from '~/components/pageLayouts';
import T from '~/components/pageTemplates';
import { useLifecycleOnDev } from '~/hooks/debug';
import { useModel } from '~/hooks/model';
import { useMemo } from '~/hooks/react';

/**
 * Client Side
 */
export const Page: TPageProps<TResource> = ({ resource, ...ctx }) => {
  const { vosToDtosThunk, postModel, validateDto } = useModel();

  const postDtos = useMemo(vosToDtosThunk(resource.postVos, postModel.Dto), [
    resource.postVos,
  ]);

  const { tryExecIfDev } = useLifecycleOnDev();

  tryExecIfDev(async () => {
    console.log('Vsalidate result', await validateDto(postDtos[0]));
  });

  return (
    <L.OneColmnLayout
      components={{
        Header: <O.Header title={ctx.page.meta.title} />,
        Footer: <O.Footer />,
      }}
    >
      <T.Model {...ctx} resource={{ postDtos }} />
    </L.OneColmnLayout>
  );
};
