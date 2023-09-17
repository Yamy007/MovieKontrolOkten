import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IGenreRes } from '../../interface'
import { AxiosError } from 'axios'
import { genreService } from '../../service/genreService'

const initialState: IGenreRes = {
	genres: [],
}

const getAll = createAsyncThunk<IGenreRes, void>(
	'genreSlice/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await genreService.getAll()
			return data
		} catch (err) {
			const e = err as AxiosError
			return rejectWithValue(e.response?.data)
		}
	}
)

const GenreSlice = createSlice({
	name: 'genreSlice',
	initialState,
	reducers: {},
	extraReducers: build =>
		build.addCase(getAll.fulfilled, (state, { payload }) => {
			state.genres = payload.genres
		}),
})

const { reducer: genreReducer, actions } = GenreSlice

const genreActions = {
	...actions,
	getAll,
}
export { genreActions, genreReducer }
