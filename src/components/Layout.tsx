import { useAuth } from '@/lib/auth';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loading, auth, needsAuth } = useAuth();

  const sectionClasses: string = 'flex flex-col z-10';
  const loaderWrapperClasses: string =
    'w-screen h-screen flex items-center justify-center';

  if (!needsAuth) {
    return (
      <>
        <Header />
        <section className={sectionClasses + (!auth ? ' text-center' : '')}>
          {loading ? <div className={loaderWrapperClasses} /> : children}
        </section>
      </>
    );
  }

  // If the route needs auth, don't let any part of it show until auth is resolved
  return (
    <>
      {!loading && <Header />}
      <section className={sectionClasses}>
        {loading ? (
          <div className={loaderWrapperClasses} />
        ) : (
          !loading && auth && children
        )}
      </section>
    </>
  );
};

export default Layout;
