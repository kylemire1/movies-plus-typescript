import Image from 'next/image';
import Link from 'next/link';

const RecommendationItem = ({ src, href = '#' }: any) => {
  return (
    <div className="group">
      <div className="overflow-hidden pt-img-hack relative rounded-lg shadow-2xl border-2 border-gray-600  group-hover:ring-2 ring-brand-white transition duration-200 ease-in-out">
        <Link href={href}>
          <a className="absolute inset-0">
            <Image
              className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={src}
              width={1200}
              height={675}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationItem;
