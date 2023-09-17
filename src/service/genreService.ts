import { urls } from '../constant'
import { IGenreRes } from '../interface'
import { apiService } from './apiService'

export const genreService = {
	getAll: () => apiService.get<IGenreRes>(urls.genreMovie),
}
