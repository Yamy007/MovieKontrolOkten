const baseURL = 'https://api.themoviedb.org/3/'
const api_key =
	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdmOTIyZmQ1ZmIxNGEwMTRiZTgzMGY4MjU1OTE2ZCIsInN1YiI6IjY0ZTRmNGQxNTI1OGFlMDBhZGQyZmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yOA7hOnSh1Ge-Pye5oCdMMqBlGI_xeCghQhldmKAJ44'
const imageConst = 'https://image.tmdb.org/t/p/w500'

const popular = 'movie/popular'
const movie = 'movie/:id'
const top_rated = 'movie/top_rated'
const now_playing = 'movie/now_playing'
const upcoming = '/movie/upcoming'
const urls = {
	top_rated,
	popular,
	now_playing,
	upcoming,
	movie: {
		byId: (id: number) => `movie/${id}`,
	},
}

export { baseURL, api_key, imageConst, urls, movie }
