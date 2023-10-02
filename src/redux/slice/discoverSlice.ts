import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IResponseMovie } from "../../interface";
import { AxiosError } from "axios";
import { movieService } from "../../service";

interface IFilter {
  page: number | void;
  id: string | void;
}

const initialState: IResponseMovie = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
};

const getAll = createAsyncThunk<IResponseMovie, number | void>(
  "discoverSlice/getAll",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await movieService.getDiscoverAll(page);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.response?.data);
    }
  }
);

const filter = createAsyncThunk<IResponseMovie, IFilter>(
  "discoverSlice/filter",
  async ({ page, id }, { rejectWithValue }) => {
    try {
      const { data } = await movieService.filter(page, id);
      return data;
    } catch (err) {
      const e = err as AxiosError;
      return rejectWithValue(e.response?.data);
    }
  }
);

const discoverSlice = createSlice({
  name: "discoverSlice",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.page = payload.page;
        state.results = payload.results;
        state.total_pages = payload.total_pages;
        state.total_results = payload.total_results;
      })
      .addCase(filter.fulfilled, (state, { payload }) => {
        state.page = payload.page;
        state.results = payload.results;
        state.total_pages = payload.total_pages;
        state.total_results = payload.total_results;
      }),
});

const { reducer: discoverReducer, actions } = discoverSlice;

const discoverActions = {
  ...actions,
  getAll,
  filter,
};
export { discoverActions, discoverReducer };
