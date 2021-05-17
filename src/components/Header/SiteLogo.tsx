import Image from 'next/image';
import Link from 'next/link';

const SiteLogo = () => {
  return (
    <div className="my-6 mr-4">
      <Link href="/">
        <a>
          <Image
            src="/images/moviesplus-logo.png"
            objectFit="contain"
            objectPosition="left"
            layout="fixed"
            width={100}
            height={61}
            alt="Movies Plus"
          />
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;
