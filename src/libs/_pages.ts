import { configs } from '@/configs';

export const pageConfigList = () => {
  return Object.values(configs.pages);
};

export const publicPageConfigs = () => {
  return pageConfigList().filter((page) => page.public);
};

export const publicPagePaths = () => {
  return publicPageConfigs().map((page) => page.path);
};

export const findPageConfigByDynamicPathname = (dynamicPathname: string) => {
  return pageConfigList().find((page) => page.path === dynamicPathname);
};
