export const HttpMethodEnum = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
} as const;

export const UserRoleEnum = {
  ADMIN: 'ADMIN',
  GENERAL: 'GENERAL',
} as const;

export const ResponseCodeEnum = {
  SUCCESS: 200,
  ERROR_401: 401,
  ERROR_403: 403,
  ERROR_404: 404,
  ERROR_422: 422,
  ERROR_500: 500,
} as const;

export const GridEnum = {
  COL_RANGE_1: 1,
  COL_RANGE_2: 2,
  COL_RANGE_3: 3,
  COL_RANGE_4: 4,
  COL_RANGE_5: 5,
  COL_RANGE_6: 6,
  COL_RANGE_7: 7,
  COL_RANGE_8: 8,
  COL_RANGE_9: 9,
  COL_RANGE_10: 10,
  COL_RANGE_11: 11,
  COL_RANGE_12: 12,
} as const;

export const FieldTypeEnum = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
} as const;
