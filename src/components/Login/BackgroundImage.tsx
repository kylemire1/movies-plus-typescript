import Image from 'next/image';

const BackgroundImage = ({
  src,
  offsetTop,
}: {
  src?: string | null;
  offsetTop?: boolean;
}) => {
  if (src) {
    return (
      <div aria-hidden="false" className="fixed inset-0">
        <Image
          aria-hidden="true"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 bg-gradient-to-br from-[#282c3c] to-[#0d0e14] z-0 ${
        offsetTop ? 'top-22' : ''
      }`}
    />
  );
};

export default BackgroundImage;
