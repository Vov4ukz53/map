import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    addressStart: [],
    addressEnd: [],
    routeInfo: [],
    history: [],
    error: false
  },
  reducers: {
    fetchMap: () => { },
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
    addHistory: ({ history }, { payload: newHistory }) => {
      history.push(newHistory);
    },
  },
});

export const {
  fetchMap,
  fetchAddressStartSuccess,
  fetchAddressEndSuccess,
  fetchRouteInfoSuccess,
  fetchMapError,
  addHistory
} = mapSlice.actions;

const selectMapState = state => state.map;

export const selectAddressStart = state => selectMapState(state).addressStart;
export const selectAddressEnd = state => selectMapState(state).addressEnd;
export const selectError = state => selectMapState(state).error;
export const selectorRouteInfo = state => selectMapState(state).routeInfo;
export const selectHistory = state => selectMapState(state).history;

export default mapSlice.reducer;