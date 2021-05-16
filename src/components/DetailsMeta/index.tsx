import Controls from './Controls';

interface DetailsMeta {
  subtitle: string;
  description: string;
}

const DetailsMeta: React.FC<DetailsMeta> = ({ subtitle, description }) => {
  return (
    <div>
      <Controls />
      <h2 className="text-2xl font-semibold">{subtitle}</h2>
      <p className="py-4 text-2xl">{description}</p>
    </div>
  );
};

export default DetailsMeta;
