export const template = (template: string, map: TObject<string>) => {
  return Object.keys(map).reduce((acc, key) => {
    return (acc = (acc === '' ? template : acc).replace(
      new RegExp(`{${key}}`, 'g'),
      map[key]
    ));
  }, template);
};
