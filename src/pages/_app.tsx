import type { AppProps } from 'next/app';
import '../app/globals.css'; // Adjust the path if globals.css is elsewhere

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}