import { C } from '@/controls';
import { E } from '@/electrons';

import { TEMPLATE_NAME } from './Worker.const';
import { s } from './Worker.styles';
import { useInfo } from '@/hooks/pageTemplate';
import { useLifecycle, useMemo, useState } from '@/hooks/react';
import { useWorker, useWorkerWithState } from '@/hooks/worker';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const workerWithState = useWorkerWithState({
    worker: useMemo(
      () =>
        new Worker(
          new URL('@/frontend/workers/porlingWorker.counter', import.meta.url)
        ),
      []
    ),

    initialState: 0,

    onReceive: ({ data, setState }) => {
      setState(data as number);
    },

    onPost: ({ data, post }) => {
      post(data);
    },
  });

  const [count, setCount] = useState(10);

  const worker = useWorker({
    worker: useMemo(
      () =>
        new Worker(
          new URL('@/frontend/workers/porlingWorker.counter', import.meta.url)
        ),
      []
    ),

    onReceive: ({ data }) => {
      setCount(data as number);
    },

    onPost: ({ data, post }) => {
      post(data);
    },
  });

  useLifecycle({
    componentDidMount: () => {
      workerWithState.post(workerWithState.state);
      worker.post(count);
    },
    componentWillUnmount: () => {
      workerWithState.terminate();
      worker.terminate();
    },
  });

  return (
    <C.Repeater component={E.Paragraph} className={s.Row}>
      <>Num: {workerWithState.state}</>
      <>Num: {count}</>
    </C.Repeater>
  );
};
