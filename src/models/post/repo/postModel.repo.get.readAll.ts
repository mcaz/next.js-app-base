import { ENDPOINT } from '../postModel.const';
import { TResponse } from './postModel.repo.get.readAll.types';
import { ApiClient } from '~/libs/api';

export const readAll = async <T = TResponse>(): Promise<T> => {
  return ApiClient.create(ENDPOINT).get<T>();
};
