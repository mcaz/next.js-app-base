export * from './eventModel.dto';
export * from './eventModel.vo';
export type {
  TRequest,
  TResponse,
} from './repo/eventModel.repo.get.findByType.types';
import { findByType } from './repo/eventModel.repo.get.findByType';

export const repo = {
  findByType,
};

export const event = {
  repo,
};

export default event;
