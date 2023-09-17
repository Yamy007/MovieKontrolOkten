import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	IMovieInfo,
	IResponseMovie,
	ISearch,
	ISearchParams,
	ISearchRes,
} from '../../interface'
import { AxiosError } from 'axios'
import { movieService } from '../../service'

interface IState {
	topMovie: IResponseMovie
	popularMovie: IResponseMovie
	now_playing: IResponseMovie
	upcoming: IResponseMovie
	search: ISearchRes
	movie: IMovieInfo
}

const initialState: IState = {
	topMovie: {
		page: 1,
		results: [],
		total_pages: 1,
		total_results: 1,
	},
	popularMovie: {
		page: 1,
		results: [],
		total_pages: 1,
		total_results: 1,
	},
	now_playing: {
		page: 1,
		results: [],
		total_pages: 1,
		total_results: 1,
	},
	upcoming: {
		page: 1,
		results: [],
		total_pages: 1,
		total_results: 1,
	},
	search: {
		page: 1,
		results: [],
		total_pages: 1,
		total_results: 1,
		isLoading: false,
	},
	movie: null,
}

const getAllTop = createAsyncThunk<IResponseMovie, void>(
	'movieSlice/getAllTop',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await movieService.getAllTop()
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)

const getAllPopular = createAsyncThunk<IResponseMovie, void>(
	'movieSlice/getAllPopular',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await movieService.getAllPopular()
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)
const getAllNow = createAsyncThunk<IResponseMovie, void>(
	'movieSlice/getAllNow',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await movieService.getAllNowPlaying()
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)

const getAllUpcoming = createAsyncThunk<IResponseMovie, void>(
	'movieSlice/getAllUpcoming',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await movieService.getAllUpcoming()
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)

const search = createAsyncThunk<ISearchRes, ISearchParams>(
	'movieSlice/search',
	async ({ query, type }, { rejectWithValue }) => {
		try {
			const { data } = await movieService.search(query, type)
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)

const movieInfo = createAsyncThunk<IMovieInfo, string>(
	'movieSlice/movieInfo',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await movieService.getMovieById(id)
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)
const MovieSlice = createSlice({
	name: 'movieSlice',
	initialState,
	reducers: {},
	extraReducers: build =>
		build
			.addCase(getAllTop.fulfilled, (state, { payload }) => {
				state.topMovie.page = payload.page
				state.topMovie.results = payload.results
				state.topMovie.total_pages = payload.total_pages
				state.topMovie.total_results = payload.total_results
			})
			.addCase(getAllPopular.fulfilled, (state, { payload }) => {
				state.popularMovie.page = payload.page
				state.popularMovie.results = payload.results
				state.popularMovie.total_pages = payload.total_pages
				state.popularMovie.total_results = payload.total_results
			})

			.addCase(getAllNow.fulfilled, (state, { payload }) => {
				state.now_playing.page = payload.page
				state.now_playing.results = payload.results
				state.now_playing.total_pages = payload.total_pages
				state.now_playing.total_results = payload.total_results
			})
			.addCase(getAllUpcoming.fulfilled, (state, { payload }) => {
				state.upcoming.page = payload.page
				state.upcoming.results = payload.results
				state.upcoming.dates = payload.dates
				state.upcoming.total_pages = payload.total_pages
				state.upcoming.total_results = payload.total_results
			})
			.addCase(search.pending, (state, { payload }) => {
				state.search.isLoading = true
			})
			.addCase(search.fulfilled, (state, { payload }) => {
				state.search.isLoading = false
				state.search.page = payload.page
				state.search.results = payload.results
				state.search.total_pages = payload.total_pages
				state.search.total_results = payload.total_results
			})
			.addCase(movieInfo.fulfilled, (state, { payload }) => {
				state.movie = payload
			}),
})

const { reducer: movieReducer, actions } = MovieSlice

const movieActions = {
	...actions,
	getAllTop,
	getAllPopular,
	getAllNow,
	getAllUpcoming,
	search,
	movieInfo,
}
export { movieActions, movieReducer }
