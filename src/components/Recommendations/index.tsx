import Container from '../styled/Container';
import { useFormattedRecommendData } from '../../utils/hooks/useFormattedRecommendData';
import { Category } from '../../pages/index';
import RecommendationGrid from './RecommendationGrid';

interface RecommendationsProps {
  sectionTitle: string;
  category: Category;
}

const Recommendations: React.FC<RecommendationsProps> = ({
  category,
  sectionTitle,
}) => {
  const recommendedData = useFormattedRecommendData(category);

  return (
    <>
      <Container className="pb-6">
        <h4 className="text-left text-2xl font-bold mb-8">{sectionTitle}</h4>
        <RecommendationGrid recommendedData={recommendedData} />
      </Container>
    </>
  );
};

export default Recommendations;
