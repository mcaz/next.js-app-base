import { useRouter } from '@/hooks';
import Head from 'next/head';
import { TProps } from './HeadProvider.module.types';

export function HeadProvider({ children }: TProps) {
  const { router } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{router?.currentPage?.meta.title}</title>
        <meta
          property="description"
          content={router?.currentPage?.meta.description}
        />
      </Head>

      {children}
    </>
  );
}
