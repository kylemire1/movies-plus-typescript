import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Category, fetchCategoriesForProps } from '@/lib/movies';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Viewers from '@/components/Viewers';
import Recommendations from '@/components/Recommendations';
import Layout from '@/components/Layout';
import ImageSlider from '@/components/ImageSlider';
import Footer from '@/components/Footer';

const HomePage = ({
  trending,
  action,
  scifi,
  animation,
}: {
  trending: Category;
  action: Category;
  scifi: Category;
  animation: Category;
}) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <BackgroundImage />
      <ImageSlider />
      <Viewers />
      <Recommendations sectionTitle="Trending" category={trending} />
      <Recommendations sectionTitle="Action" category={action} />
      <Recommendations sectionTitle="Sci-Fi" category={scifi} />
      <Recommendations sectionTitle="Animated" category={animation} />
      <Footer />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const props = await fetchCategoriesForProps();

  return {
    props,
  };
};

export default HomePage;
