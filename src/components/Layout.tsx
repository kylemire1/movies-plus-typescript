import { useAuth } from '@/lib/auth';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loading, auth, needsAuth } = useAuth();

  const sectionClasses: string = 'flex flex-col z-10';
  const loaderWrapperClasses: string =
    'w-screen h-screen flex items-center justify-center';

  if (!needsAuth) {
    return (
      <>
        <div className="anchor" id="top" />
        <Header />
        <section className={sectionClasses + (!auth ? ' text-center' : '')}>
          {loading ? <div className={loaderWrapperClasses} /> : children}
        </section>
      </>
    );
  }

  // Don't let any part of it show until auth is resolved
  return (
    <>
      <div className="anchor" id="top" />
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
