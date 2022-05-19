import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    addressStart: [],
    addressEnd: [],
    loading: false,
    error: false
  },
  reducers: {
    fetchMap: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchAddressStartSuccess: (state, { payload: mapInfo }) => {
      state.addressStart = mapInfo;
      state.loading = false;
    },
    fetchAddressEndSuccess: (state, { payload: mapInfo }) => {
      state.addressEnd = mapInfo;
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
  fetchAddressStartSuccess,
  fetchAddressEndSuccess,
  fetchMapError,
} = mapSlice.actions;

const selectMapState = state => state.map;

export const selectAddressStart = state => selectMapState(state).addressStart;
export const selectAddressEnd = state => selectMapState(state).addressEnd;
export const selectLoading = state => selectMapState(state).loading;
export const selectError = state => selectMapState(state).error;

export default mapSlice.reducer;