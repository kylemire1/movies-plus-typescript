import Image from 'next/image';
import Link from 'next/link';

interface ViewerProps {
  imgSrc: string;
  videoSrc: string;
  alt: string;
}

const Viewer: React.FC<ViewerProps> = ({ imgSrc, videoSrc, alt }) => {
  return (
    <div className="border-gray-700 border-2 rounded-lg shadow-md cursor-pointer overflow-hidden relative group">
      <Link href="#">
        <a className="block relative h-full px-2 rounded overflow-hidden">
          <video
            className="absolute inset-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <Image src={imgSrc} width={600} height={337} alt={alt} />
        </a>
      </Link>
    </div>
  );
};

export default Viewer;
