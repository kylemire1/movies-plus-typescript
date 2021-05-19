import Button from '@/components/Button';
import DetailsMeta from '@/components/DetailsMeta';
import Genres from '@/components/Genres';
import Layout from '@/components/Layout';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Container from '@/components/styled/Container';
import { fetchCategoriesForProps, getMovie, Movie } from '@/lib/movies';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import slugify from 'slugify';
import { useRouter } from 'next/router';

const DetailPage = ({
  movie: { backdrop_path, title, tagline, genres, overview },
}: {
  movie: Movie;
}) => {
  const router = useRouter();
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
        className="pt-28 -mb-28 min-h-detail h-full flex flex-col  justify-evenly"
      >
        <div className="mx-auto max-w-4xl xl:mx-0 xl:max-w-full">
          <h1 className="text-7xl font-black">{title} </h1>
          <Genres genres={genres} />
          <DetailsMeta subtitle={tagline} overview={overview} />
        </div>
        <div className="mt-64 flex flex-row">
          <Button
            elType="button"
            variantName="outline"
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeftIcon width={25} height={25} /> <span>Back</span>
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = (params?.id as string).split('-')[0];

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
    c[1].forEach(({ id, title }) => {
      if (title !== undefined && id !== undefined) {
        result.paths = [
          ...result.paths,
          { params: { id: `${id}-${slugify(title, { lower: true })}` } },
        ];
      }
    }),
  );

  return result;
};

export default DetailPage;
