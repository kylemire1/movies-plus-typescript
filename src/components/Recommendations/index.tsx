import Container from '../styled/Container';
import { Category } from '@/lib/movies';
import RecommendationGrid from './RecommendationGrid';
import slugify from 'slugify';

const Recommendations = ({
  category,
  sectionTitle,
}: {
  sectionTitle: string;
  category: Category;
}) => {
  const anchor = slugify(sectionTitle, { lower: true });
  return (
    <>
      <Container className="pb-6 mb-16">
        <div className="anchor" id={anchor} />
        <h4 className="text-left text-2xl md:text-5xl font-bold mb-8">
          {sectionTitle}
        </h4>
        <RecommendationGrid category={category} anchor={anchor} />
      </Container>
    </>
  );
};

export default Recommendations;
