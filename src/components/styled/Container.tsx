const Container = ({
  children,
  className,
  fullHeight = false,
}: {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}) => {
  return (
    <div
      className={`w-full block z-10 p-8 ${
        fullHeight ? 'min-h-screen' : 'min-h-full'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
