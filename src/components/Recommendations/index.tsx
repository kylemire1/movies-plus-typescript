import Container from '../styled/Container';
import { Category } from '@/lib/movies';
import RecommendationGrid from './RecommendationGrid';

const Recommendations = ({
  category,
  sectionTitle,
}: {
  sectionTitle: string;
  category: Category;
}) => {
  return (
    <>
      <Container className="pb-6 mb-16">
        <h4 className="text-left text-2xl md:text-5xl font-bold mb-8">
          {sectionTitle}
        </h4>
        <RecommendationGrid category={category} />
      </Container>
    </>
  );
};

export default Recommendations;
