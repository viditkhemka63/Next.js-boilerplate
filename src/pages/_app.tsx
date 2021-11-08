import { AppProps } from 'next/app';
import '@/styles/global.scss';

export function reportWebVitals(metric: any) {
  console.log('metic is ', metric);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
