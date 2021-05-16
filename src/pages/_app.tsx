import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { AuthProvider } from '@/lib/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
