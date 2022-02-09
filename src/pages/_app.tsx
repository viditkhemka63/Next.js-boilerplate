import Head from 'next/head';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

import { Layout } from '@/components/layouts/layout';
// import { lightTheme } from '@/utils/theme';

import '@/styles/global.scss';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomThemeProvider } from '@/store/context/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  Component: { getLayout: (page: ReactNode) => ReactNode };
  emotionCache?: EmotionCache;
};

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  // const [themeState, setThemeState] = useState('light');
  const getLayout =
    Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CustomThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </CustomThemeProvider>
    </CacheProvider>
  );
}

export function reportWebVitals(metric: any) {
  console.log(`metic is `, metric);
}
