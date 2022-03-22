import { CSSInterpolation } from '@emotion/serialize';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NextComponentType, NextPageContext } from 'next';
import { AppContext } from 'next/app';
import { Router } from 'next/router';
import React, { ComponentProps } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Next } from 'types';

import { RoleType } from './tableValue';

declare global {
  /**
   * ================================================================
   *
   * Utitilies
   *
   * ================================================================
   */

  type TOptional<T> = T | undefined;
  type TNullable<T> = T | null;
  type TStringable<T> = T | string;
  type TNumerable<T> = T | number;
  type TNumberOrString = string | number;
  type TRouter = Router;

  /**
   * ================================================================
   *
   * Object Utitilies
   *
   * ================================================================
   */

  type TObject<T, K = string> = { [key in K]: T };

  /**
   * ================================================================
   *
   * Class Utitilies
   *
   * ================================================================
   */

  type TClassConstructor<T> = { new (...args: any[]): T };

  /**
   * ================================================================
   *
   * Style Utitilies
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

  type TNode = React.ReactNode;
  type TNodeObject<T> = { [K in T]: TNode };
  type TChildren = TNode;
  type TElement = JSX.Element;
  type TWithProvider = (Component: TElement, ctx?: unknown) => TElement;

  /**
   * ================================================================
   *
   * Function Component Utilities
   *
   * ================================================================
   */

  type TVFC<T = unknown> = React.VFC<T>;
  type TComponentProps<T> = ComponentProps<T>;

  /**
   * ================================================================
   *
   * Intrinsic Element Utilities
   *
   * ================================================================
   */

  type TIntrinsicElements = JSX.IntrinsicElements;
  type TIntrinsicElementType<T> = React.ElementType<JSX.IntrinsicElements[T]>;

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
  type TRadioOption<T = TNumberOrString> = SelectOption<T>;

  /**
   * Checkbox Option
   */
  type TCheckboxOption<T = TNumberOrString> = SelectOption<T>;

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
    type TProps = Next.GetServerSideProps;

    /**
     * next.js GetServerSidePropsResult & Additional Result
     */
    type TResult<T = undefined> = Promise<
      Next.GetServerSidePropsResult<TServerSideAdditionalResult<T>>
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
    type TProps = Next.GetStaticProps;

    /**
     * next.js GetStaticPropsResult & Additional Result
     */
    type TResult<T = undefined> = Promise<
      Next.GetStaticPropsResult<TServerSideAdditionalResult<T>>
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
   * PageComponent Props
   */
  type TPageProps<T = undefined> = TVFC<
    TServerSideAdditionalResult<T> & { pages: TPages; router: Router }
  >;

  /**
   * _app.ts Props
   */
  type TAppProps<T = { page: TPage }> = AppContext & {
    pageProps: T;
    Component: NextComponentType<NextPageContext, unknown, T>;
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
