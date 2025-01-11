export const template = (
  template: string,
  map: { [K in string | number]: string | number },
  brackets: 'curly' | 'square' = 'curly'
) => {
  return Object.keys(map).reduce((acc: string, key) => {
    const regExp = ((brackets) => {
      switch (brackets) {
        case 'curly':
          return new RegExp(`({${key}})`, 'g');
        case 'square':
          return new RegExp(`(\\[${key}\\])`, 'g');
        default:
          return new RegExp(`({${key}})`, 'g');
      }
    })(brackets);
    return (acc = (acc === '' ? template : acc).replace(
      regExp,
      String(map[key])
    ));
  }, template);
};
