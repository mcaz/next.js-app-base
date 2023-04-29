import { TResponse } from './list.types';
import { ArticleEntity } from '../../entities';
import { createRestClient } from '@/libs/api';
import { voToDto } from '@/libs/model';

export const list = async () => {
  const { data, ...res } = await createRestClient('/posts').get<TResponse>();

  return {
    ...res,
    articles: voToDto(data, ArticleEntity),
  };
};
