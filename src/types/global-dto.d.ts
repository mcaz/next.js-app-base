import * as dto from '@/data/rest/dto';

/** dto */
declare global {
  type Dto = typeof dto;
  type DtoBase = dto.DtoBase;
  type ArticleDto = dto.ArticleDto;

  type DtoProps<T> = Omit<T, keyof DtoBase | MethodKeys<T>> & Partial<DtoBase>;
}
