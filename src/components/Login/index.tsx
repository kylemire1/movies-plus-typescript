import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import BackgroundImage from './BackgroundImage';
import CtaButton from './CtaButton';
import OfferLogos from './OfferLogos';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <>
      <BackgroundImage src="/images/login-bg-resized.jpg" />
      <div className="py-20 px-10 w-full relative h-screen box-border flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center flex-wrap text-center mx-auto w-full max-w-2xl mb-5">
          <h1 className="mb-2">
            <Image
              src="/images/moviesplus-logo.png"
              objectFit="contain"
              objectPosition="left"
              layout="fixed"
              width={150}
              height={40}
              alt="Movies Plus"
            />
          </h1>
          <hr className="w-5" />
          <h2 className="font-black mb-8 text-6xl sm:text-huge">
            Thousands of Titles On-Demand
          </h2>
          <CtaButton onClick={signInWithGoogle}>Log In With Google</CtaButton>
          <p className="text-gray-300 my-6 text-sm tracking-wide">
            Get Premier Access to Fizz and the Last Buzz for an additional fee
            with a Movies+ subscription. As of 03/26/21, the price of Movies+
            and The Movies Bundle will increase by $1.
          </p>
          <OfferLogos src="/images/offers.png" width={983} height={55} />
        </div>
      </div>
    </>
  );
};

export default Login;
