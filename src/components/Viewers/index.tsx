import Container from '../styled/Container';
import Viewer from './Viewer';

const Viewers = () => {
  return (
    <Container>
      <div className="mt-4 py-8 grid gap-6 md:grid-cols-5">
        <Viewer
          imgSrc="/images/viewers-disney.png"
          videoSrc="/videos/disney.mp4"
          alt="Disney"
        />
        <Viewer
          imgSrc="/images/viewers-pixar.png"
          videoSrc="/videos/pixar.mp4"
          alt="Pixar"
        />
        <Viewer
          imgSrc="/images/viewers-starwars.png"
          videoSrc="/videos/starwars.mp4"
          alt="Star Wars"
        />
        <Viewer
          imgSrc="/images/viewers-national.png"
          videoSrc="/videos/national-geographic.mp4"
          alt="National Geographic"
        />
        <Viewer
          imgSrc="/images/viewers-marvel.png"
          videoSrc="/videos/marvel.mp4"
          alt="Marvel"
        />
      </div>
    </Container>
  );
};

export default Viewers;
