export const createDynamicPathName = (
  pathname: string,
  params: {
    [key: string]: string | string[];
  } = {}
) => {
  return (pathname || '')
    .split('/')
    .map((segment) => {
      const paramName = Object.keys(params).find(
        (key) => params[key] === segment
      );

      return paramName ? `[${paramName}]` : segment;
    })
    .join('/');
};
