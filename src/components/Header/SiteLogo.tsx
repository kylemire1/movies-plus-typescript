import Image from 'next/image';
import Link from 'next/link';

const SiteLogo = () => {
  return (
    <div className="my-6 mr-4">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            objectFit="contain"
            objectPosition="left"
            layout="fixed"
            width={100}
            height={61}
          />
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;
