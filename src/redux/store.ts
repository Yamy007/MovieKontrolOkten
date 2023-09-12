import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './slice/MovieSlice'
// import { storyReducer } from './slice/storySlice'
// import { userReducer } from './slice/userSlice'

export const store = configureStore({
	reducer: {
		movie: movieReducer,
	},
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
