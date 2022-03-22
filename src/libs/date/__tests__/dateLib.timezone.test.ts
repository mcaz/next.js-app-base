import { TimeZoneDate } from '../dateLib.timezone';
import { isDate } from '~/test/helpers';

// 協定世界時とJSTの差分は -540になる
// const DIFFERENCES_FROM_UTC = -540;

describe('libs/date/dateLib.timezone: TimeZoneDate', () => {
  it('引数なしの場合にDate型を作成', () => {
    const date = TimeZoneDate();

    expect(isDate(date)).toBeTruthy();
  });
  it('Date型からDate型を作成', () => {
    const date = new Date();
    const newDate = TimeZoneDate(date);

    expect(isDate(newDate)).toBeTruthy();
  });
  it('String列からDate型を作成', () => {
    const date = TimeZoneDate('2000-01-01');

    expect(isDate(date)).toBeTruthy();
  });
});
