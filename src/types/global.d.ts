import { CSSInterpolation } from '@emotion/serialize';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextComponentType,
  NextPageContext,
} from 'next';
import { AppContext } from 'next/app';
import { LinkProps } from 'next/link';
import { Router } from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import {
  ComponentProps,
  DependencyList,
  EffectCallback,
  ElementType,
  FC,
  ReactNode,
} from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { RoleType } from './tableValue';

declare global {
  /**
   * ================================================================
   *
   * Utilities
   *
   * ================================================================
   */

  type TOptional<T> = T | undefined;
  type TNullable<T> = T | null;
  type TStainable<T> = T | string;
  type TNumerable<T> = T | number;
  type TNumberOrString = string | number;
  type TRouter = Router;
  type TUrlObject = LinkProps['href'];

  /**
   * ================================================================
   *
   * Object Utilities
   *
   * ================================================================
   */

  type TObject<T, K = string | number | symbol> = { [key in K]: T };

  /**
   * ================================================================
   *
   * Class Utilities
   *
   * ================================================================
   */

  type TClassConstructor<T> = { new (...args: any[]): T };
  type TDependencyList = DependencyList;

  /**
   * ================================================================
   *
   * Function Utilities
   *
   * ================================================================
   */

  type TPromiseResult<T> = T extends Promise<infer U> ? U : never;
  type TAsyncReturnType<T> = TPromiseResult<ReturnType<T>>;

  /**
   * ================================================================
   *
   * Style Utilities
   *
   * ================================================================
   */

  /**
   * CSS Styles ClasseNames Object
   */
  type TCSSClassNamesObject<T> = TObject<string, T>;

  /**
   * CSS Styles ClasseNames Object
   */
  type TPartialCSSClassNamesObject<T> = Partial<TCSSClassNamesObject<T>>;

  /**
   * CSS Styles Object
   *
   * @todo css内容間違え検知
   */
  type TCSSStylesObject = TObject<CSSInterpolation, string>;

  /**
   * ================================================================
   *
   * Component Utilities
   *
   * ================================================================
   */

  type TNode = ReactNode;
  type TNodeObject<T> = { [K in T]: TNode };
  type TChildren = TNode;
  type TElement = JSX.Element;
  type THoc = (Component: TElement, ctx?: unknown) => TElement;

  /**
   * ================================================================
   *
   * Function Component Utilities
   *
   * ================================================================
   */

  // type TFC<T = unknown> = VFC<T>;
  type TFC<T = unknown> = FC<T>;
  type TComponentProps<T> = ComponentProps<T>;
  type TEffectCallback = EffectCallback;
  type TDependencyList = DependencyList;

  /**
   * ================================================================
   *
   * Intrinsic Element Utilities
   *
   * ================================================================
   */

  type TIntrinsicElements = JSX.IntrinsicElements;
  type TIntrinsicElementType<T> = ElementType<JSX.IntrinsicElements[T]>;

  /**
   * ================================================================
   *
   * Api Utilities
   *
   * ================================================================
   */

  type TApiResponse<T, D = any> = AxiosResponse<T, D>;
  type TApiError<T, D = any> = AxiosError<T, D>;

  /**
   * ================================================================
   *
   * Object Utilities
   *
   * ================================================================
   */

  /**
   * ================================================================
   *
   * State Utilities
   *
   * ================================================================
   */

  type TDispatchState<T> = Dispatch<T>;
  type TSetStateAction<T> = SetStateAction<T>;
  type TDispatchStateAction<T> = Dispatch<SetStateAction<T>>;

  /**
   * ================================================================
   *
   * Store
   *
   * ================================================================
   */

  type TStorePayload<T> = PayloadAction<T>;

  /**
   * ================================================================
   *
   * Form
   *
   * ================================================================
   */

  /**
   * react-hook-form Submit Handler
   */
  type TSubmitHandler<T> = SubmitHandler<T>;

  /**
   * SelectOption
   */
  type TSelectOption<T> = { value: T; label: T };

  /**
   * RadioButton Option
   */
  type TRadioOption<T = TNumberOrString> = TSelectOption<T>;

  /**
   * Checkbox Option
   */
  type TCheckboxOption<T = TNumberOrString> = TSelectOption<T>;

  /**
   * ================================================================
   *
   * Page
   *
   * ================================================================
   */

  /**
   * Page Meta
   */
  type TPageMeta = { title: string; description: string };

  /**
   * Page Data
   */
  type TPage = { path: string; meta: TPageMeta };

  /**
   * Pages
   */
  type TPages = TObject<TPage>;

  /**
   * ================================================================
   *
   * ServerSide
   *
   * ================================================================
   */

  /**
   * GetServerSideResult & Additional Result
   */
  type TServerSideAdditionalResult<T> = { page: TPage; resource?: T };

  /**
   * ServerSide Rendering
   *
   * @namespace
   */
  namespace NSSR {
    /**
     * next.js GetServerSideProps
     */
    type TProps = GetServerSideProps;

    /**
     * next.js GetServerSidePropsContext
     */
    type TContext = GetServerSidePropsContext;

    /**
     * next.js GetServerSidePropsContext & query
     */
    type TContextWithQuery<T> = Omit<TContext, 'query'> & {
      query: T;
    };

    /**
     * next.js GetServerSidePropsContext & params
     */
    type TContextWithParam<T> = Omit<TContext, 'param'> & {
      param: T;
    };

    /**
     * next.js GetServerSidePropsContext & query & param
     */
    type TContextWithQueryAndParam<Q, P> = Omit<TContext, 'query', 'param'> & {
      query: Q;
      param: P;
    };

    /**
     * next.js GetServerSidePropsResult & Additional Result
     */
    type TResult<T = undefined> = Promise<
      GetServerSidePropsResult<TServerSideAdditionalResult<T>>
    >;
  }

  /**
   * Static Site Generation
   *
   * @namespace
   */
  namespace NSSG {
    /**
     * next.js GetStaticProps
     */
    type TProps = GetStaticProps;

    /**
     * next.js GetStaticPropsResult & Additional Result
     */
    type TResult<T = undefined> = Promise<
      GetStaticPropsResult<TServerSideAdditionalResult<T>>
    >;
  }

  /**
   * ================================================================
   *
   * ClientSide
   *
   * ================================================================
   */

  /**
   * TPageCommon Props
   */
  type TPageBaseProps<T> = TServerSideAdditionalResult<T> & {
    pages: TPages;
    router: Router;
  };

  /**
   * PageComponent Props
   */
  type TPageProps<T = undefined> = TFC<TPageBaseProps<T>>;

  /**
   * PageLayout Props
   */
  type TPageLayout<T = undefined> = TFC<
    TPageBaseProps<T> & {
      children: TChildren;
    }
  >;

  /**
   * PageComponent
   */
  type TPageComponent<T> = NextComponentType<NextPageContext, unknown, T> & {
    Layout?: TPageProps['Layout'];
  };

  /**
   * AppProps
   */
  type TAppProps<T = { page: TPage }> = AppContext & {
    pageProps: T;
    Component: TPageComponent<T>;
  };

  /**
   * ================================================================
   *
   * Account
   *
   * ================================================================
   */

  /**
   * 仮定義
   *
   * @todo
   */
  type TAccount = {
    profile: {
      role: keyof typeof RoleType;
    };
  };
}
