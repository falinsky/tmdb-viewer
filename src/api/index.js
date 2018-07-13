import imageFallback from '../no-image.png';

const BASE_API_URL = '//api.themoviedb.org/3/';
const BASE_IMG_API = '//image.tmdb.org/t/p/';

// api key is stored here for the simplicity purposes
const API_KEY = '63683e7ba09287916ca1fd562d966e29';

function generateQueryString(params = {}) {
  params = {
    api_key: API_KEY,
    ...params
  };

  return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
}

function generateUrl(path, params = {}) {
  const query = generateQueryString(params);

  return `${BASE_API_URL}${path}?${query}`;
}

function throwCommonError(data) {
  if (data.errors && data.errors.length) {
    throw new Error(data.errors.join(' | '));
  }

  throw new Error(`${data.status_message} (error code: ${data.status_code})`);
}

async function handleApiCall(url) {
  const response = await fetch(url);
  const data = await response.json();
  
  if (!response.ok) {
    throwCommonError(data);
  }

  return data;
}

export function getPopularMovies(page = 1) {
  const url = generateUrl('movie/popular', {page});
  
  return handleApiCall(url);
}

export function getMovie(id) {
  const url = generateUrl(`movie/${id}`);
  
  return handleApiCall(url);
}

export function getMovieRecommendations(id) {
  const url = generateUrl(`movie/${id}/recommendations`);

  return handleApiCall(url);
}

export function getGenresListForMovies() {
  const url = generateUrl('genre/movie/list');

  return handleApiCall(url);
}

export function searchMovies(query, page = 1) {
  const url = generateUrl('search/movie', {query, page});

  return handleApiCall(url);
}

export function getMoviePosterImageUrl(movie) {
  if (!movie.poster_path) {
    return imageFallback;
  }

  return `${BASE_IMG_API}w500/${movie.poster_path}`;
}

export function getMovieBackdropImageUrl(movie) {
  if (!movie.backdrop_path) {
    return imageFallback;
  }

  return `${BASE_IMG_API}w500/${movie.backdrop_path}`;
}

export function getMovieReleaseYear(movie) {
  if (!movie.release_date) {
    return 'N/A';
  }

  return new Date(movie.release_date).getFullYear();
}
