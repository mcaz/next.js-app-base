import { style } from '../styleLib.rendering';

describe('libs/style/styleLib.styleUtils: style', () => {
  const empty = {};
  const keyExistsAndValidCondition = { foo: true };
  const keyExistsAndInvalidCondition = { foo: false };

  it('第1引数のクラス名にundefined、または空文字を渡した場合に空オブジェクトを返す', () => {
    // empty
    expect(style(void 0, true)).toEqual(empty);
    expect(style('', true)).toEqual(empty);
  });

  it('第1引数の文字列をキー、第2引数の値をBooleanとして設定したオブジェクトを返す', () => {
    // keyExistsAndValidCondition
    expect(style('foo', true)).toEqual(keyExistsAndValidCondition);
    expect(style('foo', 1)).toEqual(keyExistsAndValidCondition);
    expect(style('foo', 'foo')).toEqual(keyExistsAndValidCondition);

    // keyExistsAndInvalidCondition
    expect(style('foo', false)).toEqual(keyExistsAndInvalidCondition);
    expect(style('foo', void 0)).toEqual(keyExistsAndInvalidCondition);
    expect(style('foo', null)).toEqual(keyExistsAndInvalidCondition);
    expect(style('foo', '')).toEqual(keyExistsAndInvalidCondition);
  });
});
