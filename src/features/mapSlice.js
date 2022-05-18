import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    map: [],
    map2: [],
    loading: false,
    error: false
  },
  reducers: {
    fetchMap: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchMapSuccess: (state, { payload: mapInfo }) => {
      state.map = mapInfo;
      state.loading = false;
    },
    fetchMap2Success: (state, { payload: mapInfo }) => {
      state.map2 = mapInfo;
      state.loading = false;
    },
    fetchMapError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchMap,
  fetchMapSuccess,
  fetchMap2Success,
  fetchMapError,
} = mapSlice.actions;

const selectMapState = state => state.map;

export const selectMap = state => selectMapState(state).map;
export const selectMap2 = state => selectMapState(state).map2;
export const selectLoading = state => selectMapState(state).loading;
export const selectError = state => selectMapState(state).error;

export default mapSlice.reducer;