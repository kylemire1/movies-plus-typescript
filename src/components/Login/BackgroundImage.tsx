import Image from 'next/image';

interface BackgroundImageProps {
  src?: string;
  offsetTop?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  offsetTop,
}) => {
  if (src) {
    return (
      <Image
        aria-hidden="true"
        src={src}
        layout="fill"
        objectFit="cover"
        alt=""
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-gradient-to-br from-[#282c3c] to-[#0d0e14] z-0 ${
        offsetTop ? 'top-28' : ''
      }`}
    />
  );
};

export default BackgroundImage;
