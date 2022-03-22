import { Slug } from '../apiLib.ApiClient.slug';

describe('libs/api/apiLib.ApiClient.slug: Slug', () => {
  it('slug追加', () => {
    const slug = new Slug();

    slug.append('foo');
    slug.append('bar');
    slug.append(1);
    slug.append('hoge').append('hoge');

    expect(slug.value).toEqual('foo/bar/1/hoge/hoge');
  });
});
