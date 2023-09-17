import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './slice/MovieSlice'
import { genreReducer } from './slice/GenreSlice'
import { discoverReducer } from './slice/DiscoverSlice'
import { castReducer } from './slice/CastSlice'
// import { storyReducer } from './slice/storySlice'
// import { userReducer } from './slice/userSlice'

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		genre: genreReducer,
		discover: discoverReducer,
		cast: castReducer,
	},
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
