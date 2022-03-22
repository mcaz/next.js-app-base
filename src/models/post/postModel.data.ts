import * as v from 'class-validator';

export class Data {
  @v.IsNumber()
  id: number;

  @v.IsNumber()
  userId: number;

  @v.IsString()
  title: string;

  @v.IsString()
  body: string;
}
