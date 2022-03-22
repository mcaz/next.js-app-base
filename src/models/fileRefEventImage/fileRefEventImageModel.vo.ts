import { Data } from './fileRefEventImageModel.data';
import { cv } from '~/libs/model';

export class Vo extends Data {
  @cv.IsDateString()
  createdAt: string;

  @cv.IsDateString()
  updatedAt: string;
}
