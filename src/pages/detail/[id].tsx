import Button from '@/components/Button';
import DetailsMeta from '@/components/DetailsMeta';
import Genres from '@/components/Genres';
import Layout from '@/components/Layout';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Container from '@/components/styled/Container';
import {
  Category,
  CategoryInterface,
  fetchCategoriesForProps,
  getMovie,
  Movie,
} from '@/lib/movies';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import { getSlugFromTitle } from '@/utils/getSlugFromTitle';

const DetailPage = ({
  movie: { backdrop_path, title, tagline, genres, overview },
}: {
  movie: Movie;
}) => {
  const router = useRouter();
  const category = router.asPath?.split('?')[1]?.split('=')[1];
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
      <div className="fixed inset-0 bg-black opacity-70 xl:bg-transparent xl:opacity-100 xl:bg-gradient-to-r from-[rgba(0,0,0,.75)] to-transparent" />
      <Container
        fullHeight
        className="pt-28 -mb-28 min-h-detail h-full flex flex-col  justify-evenly"
      >
        <div className="mx-auto max-w-4xl xl:mx-0 xl:max-w-full">
          <h1 className="text-7xl font-black max-w-4xl">{title} </h1>
          <Genres genres={genres} />
          <DetailsMeta subtitle={tagline} overview={overview} />
        </div>
        <div className="flex flex-row">
          <Button
            elType="button"
            variantName="outline"
            onClick={() => router.push(`/#${category}`)}
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

  const result = transformCategoriesToResult(categories);

  return result;
};

const transformCategoriesToResult = (categories: CategoryInterface) => {
  let result: GetStaticPathsResult<ParsedUrlQuery> = {
    paths: [],
    fallback: false,
  };
  const {} = categories;
  Object.entries(categories).forEach(
    ([categoryTitle, category]: [string, Category]) =>
      category.forEach(({ id, title }) => {
        if (title !== undefined && id !== undefined) {
          result.paths = [
            ...result.paths,
            {
              params: {
                category: slugify(categoryTitle, { lower: true }),
                id: `${id}-${getSlugFromTitle(title)}`,
              },
            },
          ];
        }
      }),
  );
  return result;
};

export default DetailPage;
