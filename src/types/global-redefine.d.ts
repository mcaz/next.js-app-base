import * as Next from 'next';
import * as NextApp from 'next/app';
import * as React from 'react';

/** redefine */
declare global {
  /** Next */
  type AppProps = NextApp.AppProps;
  type GetServerSidePropsContext = Next.GetServerSidePropsContext;
  type GetServerSidePropsResult = Next.GetServerSidePropsResult;
  type GetStaticPropsContext = Next.GetStaticPropsContext;
  type GetStaticPropsResult = Next.GetStaticPropsResult;

  /** React */
  type FC<T = undefined> = React.FC<T>;
  type ReactNode = React.ReactNode;
  type Children = React.ReactNode;
  type ElementType = React.ElementType;
  type ReactElement<
    P = unknown,
    T extends string | React.JSXElementConstructor<unknown> =
      | string
      | React.JSXElementConstructor<unknown>
  > = React.ReactElement<P, T>;
  type PropsWithChildren<P = {}> = React.PropsWithChildren<P>;
  type ComponentProps<T> = React.ComponentProps<T>;
  type ComponentType<T = {}> = React.ComponentType<T>;
}
