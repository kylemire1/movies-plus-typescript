import Container from '../styled/Container';
import Viewer from './Viewer';

const Viewers = () => {
  return (
    <Container>
      <div className="mt-4 py-8 grid gap-6 md:grid-cols-5">
        <Viewer
          imgSrc="/images/classics.png"
          videoSrc="/videos/classics.mp4"
          alt="Classics"
        />
        <Viewer
          imgSrc="/images/animated.png"
          videoSrc="/videos/animated.mp4"
          alt="Animated"
        />
        <Viewer
          imgSrc="/images/science-fiction.png"
          videoSrc="/videos/scifi.mp4"
          alt="Science Fiction"
        />
        <Viewer
          imgSrc="/images/nature-doc.png"
          videoSrc="/videos/nature-documentary.mp4"
          alt="Nature Documentary"
        />
        <Viewer
          imgSrc="/images/comics.png"
          videoSrc="/videos/comics.mp4"
          alt="Comics"
        />
      </div>
    </Container>
  );
};

export default Viewers;
