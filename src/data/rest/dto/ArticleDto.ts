import { DtoBase } from '@/data/rest/dto/DtoBase';

export class ArticleDto extends DtoBase {
  id: ID;
  userId: ID;
  title: string;
  body: string;

  constructor(data: Partial<ArticleDto>) {
    super(data);
  }
}
