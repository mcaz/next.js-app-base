import * as enums from './enums';

/** enums */
declare global {
  type Enums = typeof enums;

  type HttpMethod =
    (typeof enums.HttpMethodEnum)[keyof typeof enums.HttpMethodEnum];

  type ResponseCode =
    (typeof enums.ResponseCodeEnum)[keyof typeof enums.ResponseCodeEnum];

  type UserRole = (typeof enums.UserRoleEnum)[keyof typeof enums.UserRoleEnum];

  type GridRange = (typeof enums.GridEnum)[keyof typeof enums.GridEnum];

  type FieldType =
    (typeof enums.FieldTypeEnum)[keyof typeof enums.FieldTypeEnum];
}
