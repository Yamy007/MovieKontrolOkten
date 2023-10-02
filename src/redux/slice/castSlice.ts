import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICastRes } from "../../interface";
import { AxiosError } from "axios";
import { movieService } from "../../service";

const initialState: ICastRes = {
  id: null,
  cast: [],
};

const getAll = createAsyncThunk<ICastRes, string>(
  "castSlice/getAll",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await movieService.getMovieByIdWithCast(id);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.response?.data);
    }
  }
);

const castSlice = createSlice({
  name: "castSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build.addCase(getAll.fulfilled, (state, { payload }) => {
      state.cast = payload.cast;
    }),
});

const { reducer: castReducer, actions } = castSlice;

const castActions = {
  ...actions,
  getAll,
};
export { castActions, castReducer };
