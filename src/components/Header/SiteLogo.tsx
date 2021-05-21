import { scrollToElementById } from '@/utils/scrollToElementById';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const SiteLogo = () => {
  const router = useRouter();

  if (router.pathname !== '/') {
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
  }

  const handleScroll: MouseEventHandler<HTMLAnchorElement> = (_event) => {
    scrollToElementById('top');
  };

  return (
    <div className="my-6 mr-4">
      <a onClick={handleScroll} className="cursor-pointer">
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
    </div>
  );
};

export default SiteLogo;
