import { urls } from '../constant'
import { IResponseMovie } from '../interface'
import { apiService } from './apiService'
export const movieService = {
	getAllTop: () => apiService.get<IResponseMovie>(urls.top_rated),
	getAllPopular: () => apiService.get<IResponseMovie>(urls.popular),
	getAllNowPlaying: () => apiService.get<IResponseMovie>(urls.now_playing),
	getAllUpcoming: () => apiService.get<IResponseMovie>(urls.upcoming),
}
