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
	//all
	id: number
	adult: boolean
	popularity: number

	//cast
	gender?: number
	known_for?: object[]
	known_for_department?: string
	name?: string
	original_name?: string
	profile_path?: string

	//TV & Movie
	first_air_date?: string
	origin_country?: string[]
	backdrop_path?: string
	genre_ids?: number[]
	original_language?: string
	original_title?: string
	overview?: string
	poster_path?: string
	release_date?: string
	title?: string
	video?: boolean
	vote_average?: number
	vote_count?: number
}
