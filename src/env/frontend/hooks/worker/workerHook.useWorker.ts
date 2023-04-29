import { TProps } from './workerHook.useWorker.types';

/**
 * @hook
 * @param props
 * @param props.worker         worker
 * @param props.receiveHandler receiveHandler <- data -- worker
 * @param props.onReceive    onReceive    -- data -> worker
 * @returns
 *
 * @example
 *
 * const [state, setState] = useState(10);
 *
 * const worker = useWorker({
 *   // レンダリングのたびにworkerが作られてしまうので、必ずuseMemoを使う
 *   worker: useMemo(
 *    () => new Worker(new URL('@/workers/worker.polling', import.meta.url)),
 *    []
 *   ),
 *
 *   @param ctx
 *   @param ctx.data workerからpostMessageで渡されたデータ
 *   receiveHandler: ({ data }) => {
 *     setState(data as number);
 *   },
 *
 *   @param ctx
 *   @param ctx.data worker.postへ渡された引数
 *   @param ctx.post workerへデータをpostする
 *   onReceive: ({ data, post }) => {
 *     // workerへpostMessageする
 *     post(data);
 *   },
 * });
 *
 * return (
 *   <>
 *     // 引数はuseWorkerWithStateのonReceiveオプションの第二引数に渡される
 *     <button onClick={() => setState(state + 1)}>
 *       post
 *     </button>
 *     {state}
 *   </>
 * )
 */
export const useWorker = ({ worker, onReceive, onPost }: TProps) => {
  /**
   * リスナー追加
   */
  worker.addEventListener('message', ({ data }) => {
    onReceive({ data });
  });

  /**
   * データをpostする
   *
   * @param data onReceiveの第二引数に渡すコンテキスト(オプショナル)
   */
  const post = (data?: unknown) => {
    onPost({
      data,
      post: (value: unknown) => worker.postMessage(value),
    });
  };

  const terminate = () => {
    worker.terminate();
  };

  return {
    worker,
    post,
    terminate,
  };
};
