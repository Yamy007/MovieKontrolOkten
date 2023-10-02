const baseURL = "https://api.themoviedb.org/3/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdmOTIyZmQ1ZmIxNGEwMTRiZTgzMGY4MjU1OTE2ZCIsInN1YiI6IjY0ZTRmNGQxNTI1OGFlMDBhZGQyZmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yOA7hOnSh1Ge-Pye5oCdMMqBlGI_xeCghQhldmKAJ44";
const imageConst = "https://image.tmdb.org/t/p/w500";
const discoverUrl = "discover/movie?page=";
const popular = "movie/popular";
const movie = "movie/";
const top_rated = "movie/top_rated";
const now_playing = "movie/now_playing";
const upcoming = "/movie/upcoming";
const filter = "&with_genres=";
const genreMovie = "genre/movie/list";
const typeSearchQuery: string[] = ["Movie", "People", "Live Tv"];
const urls = {
  top_rated,
  popular,
  now_playing,
  upcoming,
  genreMovie,

  movie: {
    byId: (id: string) => `movie/${id}`,
    byIdWithCast: (id: string) => `movie/${id}/casts`,
    searchMovie: (query: string) => `search/movie?query=${query}`,
    searchPeople: (query: string) => `search/person?query=${query}`,
    searchTv: (query: string) => `search/tv?query=${query}`,
  },
  discover: {
    getAll: (page: number | void) => discoverUrl + page,
    filter: (page: number | void, id: string | void) =>
      discoverUrl + (page || 1) + filter + id,
  },
};

export { baseURL, apiKey, imageConst, urls, movie, typeSearchQuery };
