import RecommendationItem from './RecommendationItem';

const RecommendationGrid = ({ recommendedData }: any) => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
      {recommendedData.map(({ id, movieData }: any) => (
        <RecommendationItem
          key={id}
          src={movieData.cardImg}
          href={`/detail/${id}`}
        />
      ))}
    </div>
  );
};

export default RecommendationGrid;
