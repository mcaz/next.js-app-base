import E from '~/components/elements';
import {
  withCache,
  withMessageModal,
  withProgress,
  withRouter,
  withState,
  withStore,
  withTheme,
  withSnackbar,
} from '~/components/providers';
import {
  useHead,
  useInfo,
  useMessageModal,
  usePage,
  useRouter,
} from '~/hooks/app';
import { useLifecycles, useRender, useProvider } from '~/hooks/react';

import './_app.foundation.import';

const App: TVFC<TAppProps> = (ctx) => {
  useInfo(ctx);

  const { router } = useRouter(ctx);
  const { mounted } = useLifecycles();
  const { Page, pageCtx } = usePage(ctx);
  const { title, description } = useHead(ctx);
  const { combineWithProviders } = useProvider();
  const { tryRenderIfTrue } = useRender();
  const { messageModal } = useMessageModal();

  const Component = combineWithProviders(
    <>
      <E.NextHead>
        <E.Title>{title}</E.Title>
        <E.Link
          rel="shortcut icon"
          href="https://img.icons8.com/material-two-tone/24/000000/puzzle--v1.png"
        />
        <E.Meta name="description" content={description} />
        <E.Meta name="viewport" content="initial-scale=1, width=device-width" />
      </E.NextHead>

      <Page {...pageCtx} />
    </>,

    { with: withMessageModal, ctx: messageModal },
    { with: withProgress, ctx: router },
    { with: withSnackbar },
    { with: withRouter, ctx: router },
    { with: withState, ctx: mounted },
    { with: withStore },
    { with: withTheme },
    { with: withCache }
  );

  return tryRenderIfTrue(mounted, Component);
};

export default App;
