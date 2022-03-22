export * from './postModel.dto';
export * from './postModel.vo';
export type { TResponse } from './repo/postModel.repo.get.readAll.types';
import { readAll } from './repo/postModel.repo.get.readAll';

export const repo = {
  readAll,
};

export const post = {
  repo,
};

export default post;
