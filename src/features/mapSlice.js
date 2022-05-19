import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    addressStart: [],
    addressEnd: [],
    routeInfo: [],
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
    fetchRouteInfoSuccess: (state, { payload: routeInfo }) => {
      state.routeInfo = routeInfo;
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
  fetchRouteInfoSuccess,
  fetchMapError,
} = mapSlice.actions;

const selectMapState = state => state.map;

export const selectAddressStart = state => selectMapState(state).addressStart;
export const selectAddressEnd = state => selectMapState(state).addressEnd;
export const selectLoading = state => selectMapState(state).loading;
export const selectError = state => selectMapState(state).error;
export const selectorRouteInfo = state => selectMapState(state).routeInfo;

export default mapSlice.reducer;