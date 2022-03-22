import { TEMPLATE_NAME } from './Worker.const';
import { s } from './Worker.styles';
import E from '~/components/elements';
import { useInfo } from '~/hooks/pageTemplate';
import { useLifecycles, useMemo } from '~/hooks/react';
import { useWorkerWithState } from '~/hooks/worker';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const worker = useWorkerWithState({
    worker: useMemo(
      () => new Worker(new URL('~/workers/worker.polling', import.meta.url)),
      []
    ),

    initialState: 0,

    receiveHandler: ({ data, setState }) => {
      setState(data);
    },

    postHandler: ({ data, post }) => {
      post(data);
    },
  });

  useLifecycles({
    componentDidMount: () => {
      worker.post(worker.state);
    },
    componentWillUnmount: () => {
      worker.terminate();
    },
  });

  return (
    <E.Iteration component={E.Paragraph} className={s.Row}>
      <>Num: {worker.state}</>
    </E.Iteration>
  );
};

export default PageTemplate;
