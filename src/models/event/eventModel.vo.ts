import { Data } from './eventModel.data';
import { cv } from '~/libs/model';
import * as fileRefEventImage from '~/models/fileRefEventImage';

export class Vo extends Data {
  @cv.IsArray()
  fileRefEventImages: fileRefEventImage.Vo[];

  @cv.IsDateString()
  startDate: string;

  @cv.IsDateString()
  endDate: string;

  @cv.IsDateString()
  createdAt: string;

  @cv.IsDateString()
  updatedAt: string;
}
