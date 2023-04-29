import { envConfig } from '@/config';

/**
 * フロント共通のタイムゾーンに設定したDateインスタンスを返す
 *
 * @param date 日付データ
 * @returns    Dateインスタンス
 */
export const TimeZoneDate = (date?: Date | string) => {
  const d = ((d) => {
    if (!date) {
      return new Date();
    }

    return typeof d === 'string' ? new Date(d) : d;
  })(date);

  return new Date(
    d.toLocaleDateString('ja-JP', { timeZone: envConfig.timeZone })
  );
};
