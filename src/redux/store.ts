import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slice/movieSlice";
import { genreReducer } from "./slice/genreSlice";
import { discoverReducer } from "./slice/discoverSlice";
import { castReducer } from "./slice/castSlice";
// import { storyReducer } from './slice/storySlice'
// import { userReducer } from './slice/userSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    genre: genreReducer,
    discover: discoverReducer,
    cast: castReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
