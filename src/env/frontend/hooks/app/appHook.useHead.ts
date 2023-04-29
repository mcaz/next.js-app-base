export const useHead = (props: TAppProps) => {
  const { pageProps } = props;
  const { title, description } = pageProps.page.meta;

  return {
    title,
    description,
  };
};
