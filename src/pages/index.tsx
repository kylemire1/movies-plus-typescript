import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getMoviesByCategory } from '@/lib/db';
import firebase from '@/lib/firebase';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Viewers from '@/components/Viewers';
import Recommendations from '@/components/Recommendations';
import Layout from '../components/Layout';
import ImageSlider from '@/components/ImageSlider';

interface CategoryItem {
  id: string;
  movieData: firebase.firestore.DocumentData;
}

export type Category = Array<CategoryItem> | [];

interface HomePageProps {
  recommend: Category;
  newArrival: Category;
  original: Category;
  trending: Category;
}

const HomePage: React.FC<HomePageProps> = ({
  recommend,
  newArrival,
  original,
  trending,
}) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <BackgroundImage />
      <ImageSlider />
      <Viewers />
      <Recommendations
        sectionTitle="Recommended for You"
        category={recommend}
      />
      <Recommendations sectionTitle="New to Movies+" category={newArrival} />
      <Recommendations sectionTitle="Movies+ Originals" category={original} />
      <Recommendations sectionTitle="Trending" category={trending} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let recommend: Category = [],
    newArrival: Category = [],
    original: Category = [],
    trending: Category = [];

  try {
    recommend = await fetchMovies('recommend');
    newArrival = await fetchMovies('newArrival');
    original = await fetchMovies('original');
    trending = await fetchMovies('trending');
  } catch (err) {
    throw new err();
  }

  return {
    props: {
      recommend,
      newArrival,
      original,
      trending,
    },
  };
};

const fetchMovies = async (category: string): Promise<Category> => {
  return await getMoviesByCategory(category).then(formatDocForProps);
};

const formatDocForProps = (
  querySnapshot: firebase.firestore.QuerySnapshot,
): Category => {
  const data = querySnapshot.docs.map((doc) => {
    const formattedCategory: CategoryItem = {
      id: doc.id,
      movieData: doc.data(),
    };
    return formattedCategory;
  });
  return data;
};

export default HomePage;
