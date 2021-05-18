import { Category } from '@/pages/index';
import RecommendationItem from './RecommendationItem';

interface RecommendationGridProps {
  recommendedData: Category;
}

const RecommendationGrid = ({ recommendedData }: RecommendationGridProps) => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
      {recommendedData.map(({ id, movieData }: any) => (
        <RecommendationItem
          key={id}
          src={movieData.cardImg as string}
          href={`/detail/${id}`}
        />
      ))}
    </div>
  );
};

export default RecommendationGrid;
