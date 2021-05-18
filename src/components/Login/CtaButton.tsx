const CtaButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded p-4 text-center uppercase tracking-widest text-brand-white bg-brand-primary hover:bg-brand-primary-light transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};

export default CtaButton;
