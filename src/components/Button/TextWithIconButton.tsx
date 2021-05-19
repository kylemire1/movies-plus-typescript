import Link from 'next/link';
import { ButtonVariant } from './index';

const TextWithIconButton = ({
  children,
  elType,
  href,
  onClick,
  className,
  Icon,
}: ButtonVariant) => {
  const textWithIconButtonClasses =
    'py-2 px-4 text-sm text-red-100 flex items-center justify-center opacity-70 hover:text-red-500 hover:opacity-100 transition duration-200 ease-in-out';

  if (elType === 'link' && href) {
    return (
      <Link href={href}>
        <a className={`${textWithIconButtonClasses} ${className}`}>
          {children}
          {Icon && <Icon width={20} height={20} className="ml-2" />}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${textWithIconButtonClasses} ${className}`}
    >
      {children}
      {Icon && <Icon width={20} height={20} className="ml-2" />}
    </button>
  );
};

export default TextWithIconButton;
