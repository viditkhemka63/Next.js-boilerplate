import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { ReactNode } from 'react';
import { Layout } from '@/components/layouts/layout';

export function reportWebVitals(metric: any) {
  console.log(`metic is `, metric);
}

type CustomAppProps = AppProps & {
  Component: { getLayout: (page: ReactNode) => ReactNode };
};

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout =
    Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
