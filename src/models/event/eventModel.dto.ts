import { Data } from './eventModel.data';
import { TimeZoneDate } from '~/libs/date';
import { ct, cv } from '~/libs/model';
import * as fileRefEventImage from '~/models/fileRefEventImage';

export class Dto extends Data {
  @ct.Type(() => fileRefEventImage.Dto)
  @cv.ValidateNested()
  fileRefEventImages: fileRefEventImage.Dto;

  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  startDate: Date;

  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  endDate: Date;

  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  createdAt: Date;

  @ct.Transform(({ value }) => TimeZoneDate(value))
  @cv.IsDate()
  updatedAt: Date;
}
