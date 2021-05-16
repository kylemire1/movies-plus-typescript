import { useAuth } from '@/lib/auth';
import BackgroundImage from './BackgroundImage';
import CtaButton from './CtaButton';
import OfferLogos from './OfferLogos';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <>
      <BackgroundImage src="/images/login-background.jpg" />
      <div className="mb-48 py-20 px-10 w-full relative min-h-screen h-full box-border flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center flex-wrap text-center mx-auto w-full max-w-2xl mb-5">
          <OfferLogos src="/images/cta-logo-one.svg" width={576} height={134} />
          <CtaButton onClick={signInWithGoogle}>Sign Up Now</CtaButton>
          <p className="text-gray-300 my-6 text-sm tracking-wide">
            Get Premier Access to Foo and the Last Baz for an additional fee
            with a Movies+ subscription. As of 03/26/21, the price of Movies+
            and The Movies Bundle will increase by $1.
          </p>
          <OfferLogos src="/images/cta-logo-two.png" width={983} height={55} />
        </div>
      </div>
    </>
  );
};

export default Login;
