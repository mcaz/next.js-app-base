import { cv } from '~/libs/model';
import { EventImageType } from '~/types/tableValue';

export class Data {
  @cv.IsString()
  id: string;

  @cv.IsString()
  url: string;

  @cv.IsString()
  originalName: string;

  @cv.IsString()
  description: string;

  @cv.IsString()
  eventId: string;

  @cv.IsEnum(EventImageType)
  eventImageType: EventImageType;

  @cv.IsString()
  sizeInByte: number;
}
