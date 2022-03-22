/**
 * worker.polling
 */

export {};

const worker = self as unknown as Worker;

worker.addEventListener('message', ({ data }: MessageEvent<number>) => {
  setInterval(() => worker.postMessage(++data), 1000 * 1);
});
