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

export function getMoviePosterImageUrl(posterPath) {
  return `${BASE_IMG_API}w300/${posterPath}`;
}

export function getGenresListForMovies() {
  const url = generateUrl('genre/movie/list');

  return handleApiCall(url);
}
