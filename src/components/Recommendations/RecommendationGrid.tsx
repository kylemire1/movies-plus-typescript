import { Category, Movie } from '@/lib/movies';
import { getSlugFromTitle } from '@/utils/getSlugFromTitle';
import RecommendationItem from './RecommendationItem';

const RecommendationGrid = ({
  category,
  anchor,
}: {
  category: Category;
  anchor: string;
}) => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
      {category.length &&
        category.map(({ id, poster_path, title }: Movie) => {
          if (title === undefined) {
            return null;
          }

          return (
            <RecommendationItem
              key={id}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              href={`/detail/${id}-${getSlugFromTitle(
                title,
              )}?category=${anchor}`}
            />
          );
        })}
    </div>
  );
};

export default RecommendationGrid;
