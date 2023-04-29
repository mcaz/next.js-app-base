import { cv } from '@/libs/model';

export class ArticleEntity {
  @cv.IsNumber()
  id: number;

  @cv.IsNumber()
  userId: number;

  @cv.IsString()
  title: string;

  @cv.IsString()
  body: string;
}
