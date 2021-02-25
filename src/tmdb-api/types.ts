export type GenreID = number;

export interface Genre {
  id: GenreID;
  name: string;
}

export type MovieID = number;

export interface Movie {
  id: MovieID;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  genres: GenreID[];
  poster_path: string | null;
  backdrop_path: string | null;
}

export type MovieDetailsResult = Omit<Movie, 'genres'> & { genres: Genre[] };

export type MovieListResultItem = Omit<Movie, 'genres'> & {
  genre_ids: GenreID;
};

export interface MovieListResult {
  page: number;
  results: MovieListResultItem[];
  total_results: number;
  total_pages: number;
}

export interface GenresResult {
  genres: Genre[];
}
