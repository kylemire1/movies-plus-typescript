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
      className={`w-full top-0 block z-10 p-8 ${
        fullHeight ? '' : 'min-h-full'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
