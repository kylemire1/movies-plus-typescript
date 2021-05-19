import DetailsMeta from '@/components/DetailsMeta';
import Genres from '@/components/Genres';
import Layout from '@/components/Layout';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Container from '@/components/styled/Container';
import { fetchCategoriesForProps, getMovie, Movie } from '@/lib/movies';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

const DetailPage = ({
  movie: { backdrop_path, title, tagline, genres, overview },
}: {
  movie: Movie;
}) => {
  return (
    <Layout>
      <Head>
        <title>{title} | Movies+</title>
      </Head>
      <BackgroundImage
        src={
          backdrop_path
            ? 'https://image.tmdb.org/t/p/w1280/' + backdrop_path
            : null
        }
        offsetTop
      />
      <div className="absolute inset-0 bg-black opacity-70 xl:bg-transparent xl:opacity-100 xl:bg-gradient-to-r from-[rgba(0,0,0,.75)] to-transparent" />
      <Container
        fullHeight
        className="mt-28 min-h-detail h-full flex flex-col justify-center"
      >
        <div className="mx-auto max-w-4xl xl:mx-0 xl:max-w-full">
          <h1 className="text-7xl font-black">{title} </h1>
          <Genres genres={genres} />
          <DetailsMeta subtitle={tagline} overview={overview} />
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const movie = await getMovie(id);

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategoriesForProps();

  let result: GetStaticPathsResult<ParsedUrlQuery> = {
    paths: [],
    fallback: false,
  };
  Object.entries(categories).forEach((c) =>
    c[1].forEach((m) => {
      result.paths = [...result.paths, { params: { id: `${m?.id}` } }];
    }),
  );

  return result;
};

export default DetailPage;
