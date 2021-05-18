import Image from 'next/image';

const Viewer = ({
  imgSrc,
  videoSrc,
  alt,
}: {
  imgSrc: string;
  videoSrc: string;
  alt: string;
}) => {
  return (
    <div className="border-gray-700 border-2 rounded-lg shadow-md cursor-pointer overflow-hidden relative group">
      <div className="block relative h-full px-2 rounded overflow-hidden">
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
      </div>
    </div>
  );
};

export default Viewer;
