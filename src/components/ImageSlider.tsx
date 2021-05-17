import Image from 'next/image';
import dynamic from 'next/dynamic';
import Container from './styled/Container';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

const ImageSlider: React.FC = () => {
  return (
    <Container className="mt-16 h-64 xl:h-full xl:min-h-slider-full z-10">
      <Carousel
        plugins={[
          'arrows',
          'centered',
          'infinite',
          'fastSwipe',
          'clickToChange',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 4000,
            },
          },
        ]}
        className="mt-5"
      >
        <Slide src="/images/sci-fi.jpg" />
        <Slide src="/images/romance.jpg" />
        <Slide src="/images/fantasy.jpg" />
        <Slide src="/images/action.jpg" />
      </Carousel>
    </Container>
  );
};

interface SlideProps {
  src: string;
}

const Slide: React.FC<SlideProps> = ({ src }) => {
  return (
    <div className="w-full h-full tab-">
      <a
        href="#"
        className="block cursor-pointer m-1 shadow-2xl rounded-lg hover:ring-2 focus:ring-2 ring-brand-white transition-shadow ease-in-out duration-200"
      >
        <Image
          className="rounded-lg"
          src={src}
          layout="responsive"
          objectFit="cover"
          width={1440}
          height={368}
        />
      </a>
    </div>
  );
};

export default ImageSlider;
