import Image from 'next/image';

const OfferLogos = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <div className={`mb-3 max-w-xl w-full`}>
      <Image src={src} layout="responsive" width={width} height={height} />
    </div>
  );
};

export default OfferLogos;
