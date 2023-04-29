import { Params } from '../apiLib.Params';

describe('libs/api/apiLib.RestClient.params: Params', () => {
  it('パラメータ追加', () => {
    const params = new Params();
    expect(params.value).toEqual({});

    params.add({ foo: 1 });
    expect(params.value).toEqual({ foo: 1 });

    params.add({ bar: 'bar' });
    expect(params.value).toEqual({ foo: 1, bar: 'bar' });
  });

  it('パラメータ上書き', () => {
    const params = new Params();
    params.add({ foo: 1 });
    params.add({ foo: 'foo' });

    expect(params.value).toEqual({
      foo: 'foo',
    });
  });

  it('禁止データ追加', () => {
    const params = new Params();
    params.add({ foo: void 0 });

    expect(params.value).toEqual({});
  });
});
