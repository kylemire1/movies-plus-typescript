import Link from 'next/link';

const NavItem = ({
  Icon,
  href,
  text,
}: {
  Icon: React.ComponentType<{ className: string }>;
  href: string;
  text: string;
}) => {
  return (
    <Link href={href}>
      <a className="flex items-center justify-center text-lg uppercase tracking-widest mr-8 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out">
        <Icon className="h-5 w-5 mr-4" /> {text}
      </a>
    </Link>
  );
};

export default NavItem;
