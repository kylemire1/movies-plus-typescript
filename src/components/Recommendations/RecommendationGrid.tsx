import { Category, Movie } from '@/lib/movies';
import RecommendationItem from './RecommendationItem';

const RecommendationGrid = ({ category }: { category: Category }) => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
      {category.length &&
        category.map(({ id, poster_path }: Movie) => (
          <RecommendationItem
            key={id}
            src={'https://image.tmdb.org/t/p/w500/' + poster_path}
            href={`/detail/${id}`}
          />
        ))}
    </div>
  );
};

export default RecommendationGrid;
