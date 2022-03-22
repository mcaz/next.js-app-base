import { cv } from '~/libs/model';
import { EventType } from '~/types/tableValue';

export class Data {
  @cv.IsString()
  id: string;

  @cv.IsString()
  title: string;

  @cv.IsString()
  description: string;

  @cv.IsString()
  url: string;

  @cv.IsString()
  adminUid: string;

  @cv.IsEnum(EventType)
  type: EventType;

  @cv.IsString()
  status: string;
}
