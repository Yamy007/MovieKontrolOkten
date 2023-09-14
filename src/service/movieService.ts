import { typeSearchQuery, urls } from '../constant'
import { IResponseMovie, ISearchRes } from '../interface'
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
			return apiService.get<ISearchRes>(urls.movie.searchPeople(query))
		}
	},
}
