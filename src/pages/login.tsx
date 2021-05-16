import { useEffect } from 'react';
import Layout from '../components/Layout';
import Login from '../components/Login';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';

const LoginPage = () => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.replace('/');
    }
  }, [auth]);

  return (
    <Layout>
      <Head>
        <title>Login | Movies+</title>
      </Head>
      <Login />
    </Layout>
  );
};

export default LoginPage;
