import { typeSearchQuery, urls } from '../constant'
import { ICastRes, IMovieInfo, IResponseMovie, ISearchRes } from '../interface'
import { apiService } from './apiService'
export const movieService = {
	getAllTop: () => apiService.get<IResponseMovie>(urls.top_rated),
	getAllPopular: () => apiService.get<IResponseMovie>(urls.popular),
	getAllNowPlaying: () => apiService.get<IResponseMovie>(urls.now_playing),
	getAllUpcoming: () => apiService.get<IResponseMovie>(urls.upcoming),
	search: (query: string, type: string) => {
		if (type === typeSearchQuery[0]) {
			return apiService.get<ISearchRes>(urls.movie.searchMovie(query))
		} else if (type === typeSearchQuery[1]) {
			return apiService.get<ISearchRes>(urls.movie.searchPeople(query))
		} else {
			return apiService.get<ISearchRes>(urls.movie.searchTv(query))
		}
	},
	getDiscoverAll: (page: number | void) =>
		apiService.get<IResponseMovie>(urls.discover.getAll(page)),
	filter: (page: number | void, id: string | void) =>
		apiService.get<IResponseMovie>(urls.discover.filter(page, id)),
	getMovieById: (id: string) => apiService.get<IMovieInfo>(urls.movie.byId(id)),
	getMovieByIdWithCast: (id: string) =>
		apiService.get<ICastRes>(urls.movie.byIdWithCast(id)),
}
