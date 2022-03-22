import { TProps } from './workerHook.useWorkerWithState.types';
import { useState } from '~/hooks/react';

/**
 * @hook
 * @param props
 * @param props.worker         worker
 * @param props.receiveHandler receiveHandler <- data -- worker
 * @param props.ZQA            postHandler    -- data -> worker
 * @returns
 *
 * @example
 *
 * const worker = useWorkerWithState({
 *   // レンダリングのたびにworkerが作られてしまうので、必ずuseMemoを使う
 *   worker: useMemo(
 *    () => new Worker(new URL('~/workers/worker.polling', import.meta.url)),
 *    []
 *   ),
 *
 *   // 初期state
 *   initialState: 0,
 *
 *   @param ctx
 *   @param ctx.data     workerからpostMessageで渡されたデータ
 *   @param ctx.state    state
 *   @param ctx.setState setState
 *   receiveHandler: ({ data, state, setState }) => {
 *     setState(num);
 *   },
 *
 *   @param ctx
 *   @param ctx.data     worker.postへ渡された引数
 *   @param ctx.state    state
 *   @param ctx.setState setState
 *   @param ctx.post     workerへデータをpostする
 *   postHandler: ({ data, state, setState, post }) => {
 *     // workerへpostMessageする
 *     post(num);
 *   },
 * });
 *
 * return (
 *   <>
 *     // 引数はuseWorkerWithStateのpostHandlerオプションの第二引数に渡される
 *     <button onClick={() => worker.post(worker.state)}>
 *       post
 *     </button>
 *     {worker.state}
 *   </>
 * )
 */
export const useWorkerWithState = <T = unknown | undefined>({
  worker,
  initialState,
  receiveHandler,
  postHandler,
}: TProps<T>) => {
  const [state, setState] = useState<T>(initialState);

  /**
   * リスナー追加
   */
  worker.addEventListener('message', ({ data }) => {
    receiveHandler({ data, state, setState });
  });

  /**
   * データをpostする
   *
   * @param data postHandlerの第二引数に渡すコンテキスト(オプショナル)
   */
  const post = (data?: unknown) => {
    postHandler({
      data,
      state,
      setState,
      post: (value: unknown) => worker.postMessage(value),
    });
  };

  const terminate = () => {
    worker.terminate();
  };

  return {
    worker,
    post,
    state,
    setState,
    terminate,
  };
};
