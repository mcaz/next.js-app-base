export class Params {
  /**
   * パラメータデータ
   */
  value: object = {};

  /**
   * パラメータを追加する
   *
   * @param params 追加パラメータ
   * @returns      Paramsインスタンス
   *
   * @example
   *
   * const params = new Params()
   *
   * params.add({ foo: 'foo' })
   * params.add({ bar: 'bar', hoge: undefined }).add({ hogehoge: 1 })
   *
   * console.log(params.value)
   * => { foo: 'foo', bar: 'bar', hogehoge: 1 }
   */
  add(params: object) {
    Object.entries(params).forEach(
      // undefinedは除外する
      // 既存データが存在する場合は上書きする
      ([k, v]) => v !== undefined && (this.value[k] = v)
    );
    return this;
  }
}
