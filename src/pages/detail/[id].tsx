import DetailsMeta from '@/components/DetailsMeta';
import Layout from '@/components/Layout';
import BackgroundImage from '@/components/Login/BackgroundImage';
import Container from '@/components/styled/Container';
import { getMovie } from '@/lib/db';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

interface DetailPageProps {
  title: string;
  backgroundImg: string;
  titleImg: string;
  subTitle: string;
  description: string;
}

const DetailPage = ({
  title,
  backgroundImg,
  titleImg,
  subTitle,
  description,
}: DetailPageProps) => {
  return (
    <Layout>
      <Head>
        <title>{title} | Movies+</title>
      </Head>
      <BackgroundImage src={backgroundImg} offsetTop />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,.75)] to-transparent" />
      <Container className="mt-28">
        <div className="max-w-xl">
          <Image src={titleImg} width={851} height={479} />
        </div>
        <DetailsMeta subtitle={subTitle} description={description} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const movieData = await getMovie(id).then((doc) => {
    if (doc.exists) {
      return doc.data();
    }
  });

  let props: {} | DetailPageProps = {};
  if (typeof movieData !== 'undefined') {
    props = {
      title: movieData.title,
      backgroundImg: movieData.backgroundImg,
      titleImg: movieData.titleImg,
      subTitle: movieData.subTitle,
      description: movieData.description,
    };
  }

  return {
    props,
  };
};

export default DetailPage;
