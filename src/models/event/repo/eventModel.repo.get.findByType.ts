import { TRequest, TResponse } from './eventModel.repo.get.findByType.types';
import { ApiClient } from '~/libs/api';
import { ENDPOINT } from '~/models/event/eventModel.const';

export const findByType = async <T = TResponse>(
  props: TRequest
): Promise<T> => {
  return ApiClient.create(ENDPOINT).addParams(props).get();
};
