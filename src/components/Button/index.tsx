import OutlineButton from './OutlineButton';
import TextWithIconButton from './TextWithIconButton';
import RoundIcon from './RoundIconButon';

type ButtonElementType = 'link' | 'button';
export interface ButtonVariant {
  children?: React.ReactNode;
  elType: ButtonElementType;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  Icon?: any;
  width?: number;
  height?: number;
}

type ButtonVariantName = 'outline' | 'roundIcon' | 'textWithIcon';
interface ButtonProps extends ButtonVariant {
  variantName: ButtonVariantName;
  restOfProps?: ButtonVariant;
}

const Button = ({ children, variantName, ...restOfProps }: ButtonProps) => {
  switch (variantName) {
    case 'outline':
      return <OutlineButton {...restOfProps}>{children}</OutlineButton>;
    case 'textWithIcon':
      return (
        <TextWithIconButton {...restOfProps}>{children}</TextWithIconButton>
      );
    case 'roundIcon':
      return <RoundIcon {...restOfProps}>{children}</RoundIcon>;
  }
};

export default Button;
