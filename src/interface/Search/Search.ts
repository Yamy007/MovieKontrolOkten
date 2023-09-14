import { ISearchBox } from '../../components/Search/SearchBox'
export interface ISearchParams {
	query: string
	type: string
}

export interface ISearchRes {
	page: number
	results: ISearch[]
	total_pages: number
	total_results: number
	isLoading: boolean
}

export interface ISearch {
	id: number
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
