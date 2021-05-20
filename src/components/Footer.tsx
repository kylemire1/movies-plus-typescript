import Image from 'next/image';
import Container from './styled/Container';

const Footer = () => {
  return (
    <footer className="flex flex-row justify-start items-center py-8">
      <Container>
        <div>
          <p className="m-0">Movie data and images provided by</p>
          <div className="w-72">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noferrer"
              aria-label="The Movie DB"
            >
              <Image src="/images/tmdb.svg" width={743} height={96} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
