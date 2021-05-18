import Controls from './Controls';

const DetailsMeta = ({
  subtitle,
  description,
}: {
  subtitle: string;
  description: string;
}) => {
  return (
    <div>
      <Controls />
      <h2 className="text-2xl font-semibold">{subtitle}</h2>
      <p className="py-4 text-2xl">{description}</p>
    </div>
  );
};

export default DetailsMeta;
