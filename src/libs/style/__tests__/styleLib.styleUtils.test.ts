import { tryStyleIfTrue } from '../styleLib.rendering';

describe('libs/style/styleLib.styleUtils: tryStyleIfTrue', () => {
  const empty = {};
  const keyExistsAndValidCondition = { foo: true };
  const keyExistsAndInvalidCondition = { foo: false };

  it('第1引数のクラス名にundefined、または空文字を渡した場合に空オブジェクトを返す', () => {
    // empty
    expect(tryStyleIfTrue(undefined, true)).toEqual(empty);
    expect(tryStyleIfTrue('', true)).toEqual(empty);
  });

  it('第1引数の文字列をキー、第2引数の値をBooleanとして設定したオブジェクトを返す', () => {
    // keyExistsAndValidCondition
    expect(tryStyleIfTrue('foo', true)).toEqual(keyExistsAndValidCondition);
    expect(tryStyleIfTrue('foo', 1)).toEqual(keyExistsAndValidCondition);
    expect(tryStyleIfTrue('foo', 'foo')).toEqual(keyExistsAndValidCondition);

    // keyExistsAndInvalidCondition
    expect(tryStyleIfTrue('foo', false)).toEqual(keyExistsAndInvalidCondition);
    expect(tryStyleIfTrue('foo', undefined)).toEqual(
      keyExistsAndInvalidCondition
    );
    expect(tryStyleIfTrue('foo', null)).toEqual(keyExistsAndInvalidCondition);
    expect(tryStyleIfTrue('foo', '')).toEqual(keyExistsAndInvalidCondition);
  });
});
