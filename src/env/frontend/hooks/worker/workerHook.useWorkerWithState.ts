import { useState } from '@/hooks/react';

import { TProps } from './workerHook.useWorkerWithState.types';

/**
 * @hook
 * @param props
 * @param props.worker    worker
 * @param props.onReceive onReceive <- data -- worker
 * @param props.onPost    onPost    -- data -> worker
 * @returns
 *
 * @example
 *
 * const worker = useWorkerWithState({
 *   // レンダリングのたびにworkerが作られてしまうので、必ずuseMemoを使う
 *   worker: useMemo(
 *    () => new Worker(new URL('@/workers/worker.polling', import.meta.url)),
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
 *   onReceive: ({ data, state, setState }) => {
 *     setState(data as number);
 *   },
 *
 *   @param ctx
 *   @param ctx.data     worker.postへ渡された引数
 *   @param ctx.state    state
 *   @param ctx.setState setState
 *   @param ctx.post     workerへデータをpostする
 *   onPost: ({ data, state, setState, post }) => {
 *     // workerへpostMessageする
 *     post(data);
 *   },
 * });
 *
 * return (
 *   <>
 *     // 引数はuseWorkerWithStateのonPostオプションの第二引数に渡される
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
  onReceive,
  onPost,
}: TProps<T>) => {
  const [state, setState] = useState<T>(initialState);

  /**
   * リスナー追加
   */
  worker.addEventListener('message', ({ data }) => {
    onReceive({ data, state, setState });
  });

  /**
   * データをpostする
   *
   * @param data onPostの第二引数に渡すコンテキスト(オプショナル)
   */
  const post = (data?: unknown) => {
    onPost({
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
