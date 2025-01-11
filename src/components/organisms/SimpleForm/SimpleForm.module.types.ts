export type TFields = {
  id: string;
  name: string;
  countrySelect: string;
  articleSelect: string;
};

export type TProps = {
  articleOptions: OptionType<ArticleDto>[];
};
