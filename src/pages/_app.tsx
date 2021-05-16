import { AppProps } from 'next/app';
import '@/styles/global.css';
import { AuthProvider } from '@/lib/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
