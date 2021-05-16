import Image from 'next/image';

interface OfferLogoProps {
  src: string;
  width: number;
  height: number;
}

const OfferLogos: React.FC<OfferLogoProps> = ({ src, width, height }) => {
  return (
    <div className={`mb-3 max-w-xl w-full`}>
      <Image src={src} layout="responsive" width={width} height={height} />
    </div>
  );
};

export default OfferLogos;
