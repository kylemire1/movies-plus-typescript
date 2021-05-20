import Image from 'next/image';
import Link from 'next/link';

const RecommendationItem = ({
  src,
  href,
  title,
}: {
  src: string;
  href: string;
  title: string;
}) => {
  return (
    <div className="group">
      <div className="overflow-hidden aspect-w-2 aspect-h-3 relative rounded-lg shadow-2xl border-2 border-gray-600  group-hover:ring-2 ring-brand-white transition duration-200 ease-in-out h-full">
        <Link href={href}>
          <a className="absolute inset-0 h-full">
            <Image
              className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={src}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationItem;
