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

export function getPopularMovies(page = 1) {
  const path = 'movie/popular';
  const query = generateQueryString({page});
  const url = `${BASE_API_URL}${path}?${query}`;

  return fetch(url).then(response => response.json()).then(data => {
    if (data.results) {
      return data;
    }

    throw new Error(`${data.status_message} (error code: ${data.status_code})`);
  });
}

export function getMoviePosterImageUrl(posterPath) {
  return `${BASE_IMG_API}w300/${posterPath}`;
}