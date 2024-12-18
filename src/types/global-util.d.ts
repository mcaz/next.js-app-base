import * as React from 'react';
import { configs } from '@/config';
import { services } from '@/data/rest';

/** utils */
declare global {
  type Configs = typeof configs;
  type Optional<T> = T | undefined;
  type Nullable<T> = T | null;
  type Maybe<T> = T | null | undefined;
  type Ensure<T, A> = A extends T ? A : never;
  type Obj<T, K = string | number> = { [key in K]: T };
  type NumberOrString = number | string;
  type ID = number;
  type StringID = string;
  type Parameters<T extends Function> = T extends (...args: infer P) => unknown
    ? P
    : never;
  type FuncParams<T extends Function> = Parameters<T>;
  type FuncParam<T extends Function> = Parameters<T>[0];
  type MethodKeys<T> = {
    [P in keyof T]: T[P] extends Function ? P : never;
  }[keyof T];
  type RequestResponse<RawData, Data> = Promise<{
    status: number;
    rawData: RawData;
    data: Data;
  }>;
  type Services = typeof services;
  type OptionType<T = unknown> = {
    label: string;
    value: NumberOrString;
    rawData?: T;
  };
}
