export type GenreID = number;

export interface Genre {
  id: GenreID;
  name: string;
}

export type MovieID = number;

interface MovieCommon {
  id: MovieID;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export type MovieDetailsResult = MovieCommon & {
  genres: Genre[];
};

export type MovieListResultItem = MovieCommon & {
  genre_ids: GenreID;
};

export type Movie = MovieDetailsResult | MovieListResultItem;

export interface MovieListResult {
  page: number;
  results: MovieListResultItem[];
  total_results: number;
  total_pages: number;
}
