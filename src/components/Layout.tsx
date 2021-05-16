import { useAuth } from '@/lib/auth';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loading, auth } = useAuth();

  const sectionClasses: string = 'flex flex-col z-10';
  const loaderWrapperClasses: string =
    'w-screen h-screen flex items-center justify-center';

  let needsAuth = false;
  console.log(loading);
  if (!needsAuth) {
    return (
      <>
        <section className={sectionClasses + (!auth ? ' text-center' : '')}>
          {loading ? <div className={loaderWrapperClasses} /> : children}
        </section>
        <Header />
      </>
    );
  }

  // If the route needs auth, don't let any part of it show until auth is resolved
  return (
    <>
      <section className={sectionClasses}>
        {loading ? (
          <div className={loaderWrapperClasses} />
        ) : (
          !loading && auth && children
        )}
      </section>
      {!loading && <Header />}
    </>
  );
};

export default Layout;
