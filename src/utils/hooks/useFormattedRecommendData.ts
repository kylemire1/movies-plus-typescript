import { Category } from '@/pages';
import { useMemo } from 'react';

export const useFormattedRecommendData = (unformattedData: Category) => {
  const recommendedData = useMemo(() => {
    return Object.entries(unformattedData).map(([, { movieData, id }]) => {
      return { movieData, id };
    });
  }, [unformattedData]);
  return recommendedData;
};
