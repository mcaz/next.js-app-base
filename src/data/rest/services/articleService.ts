import { RestServiceBase } from '@/libs/restService';

class RestService extends RestServiceBase {
  constructor() {
    super('/posts');
  }

  /**
   * 記事一覧を取得する
   * @returns {RequestResponse<
   *    DtoProps<ArticleDto>[],
   *    ArticleDto[]
   * >}
   */
  list = RestService.createRequest(
    { resource: this.resource('/') },

    async ({ client, dto }) => {
      const { status, rawData } = await client.get<DtoProps<ArticleDto>[]>();

      return {
        status,
        rawData,
        data: rawData.map((d) => new dto.ArticleDto(d)),
      };
    }
  );

  /**
   * IDを元に記事を検索する
   * @param   {ID} params.id
   * @returns {RequestResponse<
   *    DtoProps<ArticleDto>[],
   *    ArticleDto[]
   * >}
   */
  findById = RestService.createRequest(
    { resource: this.resource('/{id}') },

    async ({ client, dto }, params: { id: ID }) => {
      const { status, rawData } = await client
        .routeParams(params)
        .get<DtoProps<ArticleDto>[]>();

      return {
        status,
        rawData,
        data: rawData.map((d) => new dto.ArticleDto(d)),
      };
    }
  );
}

export const articleService = new RestService();
