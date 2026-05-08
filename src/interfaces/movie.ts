export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  original_language: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  original_language: string;
  vote_average: number;
  genres: Genre[];
}
