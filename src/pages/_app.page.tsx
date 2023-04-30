import { default as Head } from 'next/head';

import { C } from '@/controls';
import { E } from '@/electrons';
import {
  useHead,
  useInfo,
  useMessageModal,
  usePage,
  useRouter,
} from '@/hooks/app';
import { useHoc, useLifecycle } from '@/hooks/react';
import {
  withCache,
  withMessageModal,
  withProgress,
  withRouter,
  withSnackbar,
  withState,
  withStore,
  withTheme,
} from '@/providers';

import './_app.foundation.import';

const App: TFC<TAppProps> = (props) => {
  useInfo(props);

  const { router } = useRouter(props);
  const { mounted } = useLifecycle();
  const { Page, ctx } = usePage(props);
  const { title, description } = useHead(props);
  const { combineHocs } = useHoc();
  const { messageModal } = useMessageModal();

  const Component = combineHocs(
    <>
      <Head>
        <E.Title>{title}</E.Title>
        <E.Link
          rel="shortcut icon"
          href="https://img.icons8.com/material-two-tone/24/000000/puzzle--v1.png"
        />
        <E.Meta name="description" content={description} />
        <E.Meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Page {...ctx} />
    </>,

    { hoc: withMessageModal, ctx: messageModal },
    { hoc: withProgress, ctx: router },
    { hoc: withSnackbar },
    { hoc: withRouter, ctx: router },
    { hoc: withState, ctx: mounted },
    { hoc: withStore },
    { hoc: withTheme },
    { hoc: withCache }
  );

  return <C.If condition={mounted}>{Component}</C.If>;
};

export default App;
