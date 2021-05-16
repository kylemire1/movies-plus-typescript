interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full block z-50 p-8 min-h-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
