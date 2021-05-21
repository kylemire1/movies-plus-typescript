import Controls from './Controls';

const DetailsMeta = ({
  subtitle,
  overview,
}: {
  subtitle: string | null | undefined;
  overview: string | null | undefined;
}) => {
  return (
    <div>
      <Controls />
      {subtitle && <h2 className="text-2xl font-semibold">{subtitle}</h2>}
      <p className="py-4 text-lg md:text-2xl max-w-prose-sm">{overview}</p>
    </div>
  );
};

export default DetailsMeta;
