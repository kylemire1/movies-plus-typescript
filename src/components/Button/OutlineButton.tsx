import Link from 'next/link';
import { ButtonVariant } from './index';

const OutlineButton = ({
  children,
  elType,
  href,
  onClick,
  className,
}: ButtonVariant) => {
  const outlineButtonClasses =
    'p-4 border border-white border-solid rounded bg-brand-dark bg-opacity-70 uppercase tracking-widest hover:bg-brand-white hover:text-brand-dark transition-colors duration-200 ease-in-out flex items-center justify-center';

  if (elType === 'link' && href) {
    return (
      <Link href={href}>
        <a className={`${outlineButtonClasses} ${className}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${outlineButtonClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
