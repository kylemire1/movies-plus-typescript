interface FadeOverlayProps {
  position: 'left' | 'right';
}

const FadeOverlay: React.FC<FadeOverlayProps> = ({ position }) => {
  let positionClass = 'right-0';
  let gradientDirection = 'bg-gradient-to-l';
  if (position === 'left') {
    positionClass = 'left-0';
    gradientDirection = 'bg-gradient-to-r';
  }

  return (
    <div
      className={`hidden md:block absolute ${positionClass} inset-y-0 w-16 ${gradientDirection} from-brand-dark to-transparent z-50`}
    />
  );
};

export default FadeOverlay;
