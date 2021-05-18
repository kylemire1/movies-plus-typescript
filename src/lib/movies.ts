const API_KEY = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

type CategoryId = '28' | '878' | '10749';
interface Category {
  [key: string]: CategoryId;
}

export const getMoviesByCategory = async (
  categoryName: string = 'trending',
) => {
  let requestUri: string | undefined;
  if (categoryName !== 'trending') {
    let category: Category = {
      action: '28',
      'sci-fi': '878',
      romance: '10749',
    };

    requestUri = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US&with_genres=${category[categoryName]}`;
  } else {
    requestUri = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
  }

  return await fetch(BASE_URL + requestUri).then((res) => res.json());
};

export const getMovie = async (movieId: string) => {
  return await fetch(BASE_URL + `/movie/${movieId}`).then((res) => res.json());
};
