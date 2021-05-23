const API_KEY = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}
type ProductionCompanies = ProductionCompany[];
type ProductionCountries = ProductionCountry[];
type SpokenLanguages = SpokenLanguage[];
type Status =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';
export type Genre = { id: number; name: string };

// https://developers.themoviedb.org/3/movies/get-movie-details
export interface Movie {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompanies;
  production_countries?: ProductionCountries;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguages;
  status?: Status;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export type Category = Movie[];

type MaybeCategory = Category | undefined;

export interface CategoryObject {
  trending: Category;
  action: Category;
  scifi: Category;
  animation: Category;
}

export const getMoviesByCategoryId = async (
  categoryId: string = 'trending',
): Promise<Category> => {
  let requestUri;
  if (categoryId !== 'trending') {
    requestUri = `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${categoryId}&adult=true`;
  } else {
    requestUri = `/trending/all/week?api_key=${API_KEY}&language=en-US&adult=true`;
  }

  return await fetch(BASE_URL + requestUri)
    .then((res) => res.json())
    .then(({ results }: { results: Movie[] }) => {
      return results.filter((r) => r.adult === false); // sometimes comes back undefined
    });
};

export const getMovie = async (movieId: string): Promise<Movie> => {
  return await fetch(
    BASE_URL + `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then((res) => res.json());
};

export const fetchCategoriesForProps = async (): Promise<CategoryObject> => {
  let trending: MaybeCategory,
    action: MaybeCategory,
    scifi: MaybeCategory,
    animation: MaybeCategory;

  try {
    trending = await getMoviesByCategoryId('trending');
    action = await getMoviesByCategoryId('28');
    scifi = await getMoviesByCategoryId('878');
    animation = await getMoviesByCategoryId('16');
  } catch (err) {
    throw new Error(err);
  }

  return {
    trending,
    action,
    scifi,
    animation,
  };
};
