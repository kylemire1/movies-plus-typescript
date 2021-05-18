import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { LogoutIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Button from '../Button';
import Nav from './Nav';
import SiteLogo from './SiteLogo';

type LoginLogoutHandler = (action: 'LOGIN' | 'LOGOUT') => Promise<void>;

const Header = () => {
  const { auth, signInWithGoogle, signOut } = useAuth();
  const router = useRouter();
  const isInsideApp = router.pathname !== '/login';

  const handleClick: LoginLogoutHandler = async (action) => {
    if (action === 'LOGIN') {
      await signInWithGoogle();
    } else if (action === 'LOGOUT') {
      await signOut();
    }
  };

  const headerBgClass: string = isInsideApp ? 'bg-brand-dark' : '';

  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 flex items-center px-10 h-header ${headerBgClass}`}
    >
      {isInsideApp && auth ? (
        <>
          <SiteLogo />
          <Nav />
          <Button
            className="ml-auto"
            variantName="textWithIcon"
            elType="button"
            Icon={LogoutIcon}
            onClick={() => handleClick(!auth ? 'LOGIN' : 'LOGOUT')}
          >
            Logout
          </Button>
          {auth.photoUrl && (
            <div className="profile-pic">
              <Image
                className="rounded-full"
                src={auth.photoUrl}
                width={45}
                height={45}
                alt=""
              />
            </div>
          )}
        </>
      ) : null}
    </header>
  );
};

export default Header;
