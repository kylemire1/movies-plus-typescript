import Link from 'next/link';
import { ButtonVariant } from './index';

const RoundIconButton = ({
  elType,
  href,
  onClick,
  className,
  Icon,
  width,
  height,
}: ButtonVariant) => {
  const outlineButtonClasses =
    'p-4 border border-white border-solid rounded-full bg-brand-dark bg-opacity-70 uppercase tracking-widest hover:bg-brand-white hover:text-brand-dark transition-colors duration-200 ease-in-out';

  if (elType === 'link' && href) {
    return (
      <Link href={href}>
        <a>
          <Icon width={width} height={height} />
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${outlineButtonClasses} ${className}`}
    >
      <Icon width={width} height={height} />
    </button>
  );
};

export default RoundIconButton;
