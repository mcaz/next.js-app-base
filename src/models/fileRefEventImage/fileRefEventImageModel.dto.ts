import { Data } from './fileRefEventImageModel.data';
import { TimeZoneDate } from '~/libs/date';
import { ct, cv } from '~/libs/model';

export class Dto extends Data {
  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  createdAt: Date;

  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  updatedAt: Date;
}
