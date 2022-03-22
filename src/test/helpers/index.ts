const toString = Object.prototype.toString;

export const isDate = (date: unknown) => {
  return toString.call(date) === '[object Date]';
};
