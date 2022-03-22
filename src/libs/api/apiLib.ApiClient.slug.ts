import path from 'path';

export class Slug {
  /**
   * slugデータ
   */
  value = '';

  /**
   * slugを末尾に追加する
   *
   * @param slug 追加slug
   * @returns    Slugインスタンス
   *
   * @example
   *
   * const slug = new Slug()
   *
   * slug.append('foo')
   * slug.append('bar')
   * slug.append('hoge').append('hoge')
   *
   * console.log(slug.value)
   * =>'foo/bar/hoge/hoge'
   */
  append(slug: TNumberOrString) {
    this.value = path.join(this.value, String(slug));
    return this;
  }
}
