const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full block z-10 p-8 min-h-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
