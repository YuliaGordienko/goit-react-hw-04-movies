export function ApiPopularMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=2ec91e815eba972c680eab68b56d7f8e`
  ).then((res) => res.json());
}
export function ApiFilmById(movieId) {
  return fetch(
    `
https://api.themoviedb.org/3/movie/${movieId}?api_key=2ec91e815eba972c680eab68b56d7f8e&language=en-US`
  ).then((res) => res.json());
}
export function ApiCast(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2ec91e815eba972c680eab68b56d7f8e&language=en-US`
  ).then((res) => res.json());
}
export function ApiReviews(movieId) {
  return fetch(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2ec91e815eba972c680eab68b56d7f8e&language=en-US&page=1`).then(
    (res) => res.json()
  );
}
export function ApiKeyWord(value) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=2ec91e815eba972c680eab68b56d7f8e&language=en-US&query=${value}&page=1&include_adult=false`
  ).then((res) => res.json());
}
