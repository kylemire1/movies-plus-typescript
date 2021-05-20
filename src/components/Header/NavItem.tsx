import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const NavItem = ({
  Icon,
  href,
  text,
  toTop,
}: {
  Icon: React.ComponentType<{ className: string }>;
  href: string;
  text: string;
  toTop?: boolean;
}) => {
  const router = useRouter();

  if (router.pathname !== '/') {
    return (
      <Link href={href}>
        <a className="flex items-center justify-center text-lg uppercase tracking-widest mr-8 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <Icon className="h-5 w-5 mr-4" /> {text}
        </a>
      </Link>
    );
  }

  const anchor = href.replace('/#', '');
  const handleScroll: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    console.log(typeof window.location.hash);

    const target = toTop ? 'top' : anchor;
    const scrollElement = document.getElementById(target);
    scrollElement?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <a
      href={!toTop ? href : ''}
      onClick={handleScroll}
      className="flex items-center justify-center text-lg uppercase tracking-widest mr-8 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
    >
      <Icon className="h-5 w-5 mr-4" /> {text}
    </a>
  );
};

export default NavItem;
