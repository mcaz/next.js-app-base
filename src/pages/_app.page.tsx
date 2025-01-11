import {
  AppCacheProvider,
  EmotionCacheProvider,
  HeadProvider,
  NoticeProvider,
  ThemeProvider,
} from '@/components/extensions';
import { useCombine } from '@/hooks';
import '@/styles/globals.css';

export default function MyApp(appProps: AppProps) {
  const { Component, pageProps } = appProps;

  const CombinedComponent = useCombine(
    <Component {...pageProps} />,

    { component: EmotionCacheProvider },
    { component: HeadProvider },
    { component: AppCacheProvider, props: { appProps } },
    { component: NoticeProvider },
    { component: ThemeProvider }
  );

  return CombinedComponent;
}
