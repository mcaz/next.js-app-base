import { envConfig } from '@/config';

/**
 * 本番環境判定
 *
 * @returns boolean
 */
export const isProduction = () => {
  return envConfig.env === 'production';
};

/**
 * 開発環境判定
 *
 * @returns boolean
 */
export const isDevelopment = () => {
  return envConfig.env === 'development';
};

/**
 * 本番環境のときだけコールバックを実行する
 *
 * @param cb コールバック
 * @returns
 */
export const tryExecIfProd = (cb: VoidFunction) => {
  return isProduction() && cb();
};

/**
 * 開発環境のときだけコールバックを実行する
 *
 * @param cb コールバック
 * @returns
 */
export const tryExecIfDev = (cb: VoidFunction) => {
  return isDevelopment() && cb();
};
