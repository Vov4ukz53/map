import { call, put, takeLatest } from "redux-saga/effects";
import { getApi } from "../getApi";
import { url, API_KEY, calculateRouteUrl } from "../apiData";
import {
  fetchMap,
  fetchMapError,
  fetchAddressStartSuccess,
  fetchAddressEndSuccess,
  fetchRouteInfoSuccess,
} from "./mapSlice";

function* fetchMapHandler({ payload: { query, query1 } }) {
  const API = `${url}${query}.json?key=${API_KEY}`;
  const API2 = `${url}${query1}.json?key=${API_KEY}`;

  try {
    const addressStartInfo = yield call(getApi, API);
    const addressEndInfo = yield call(getApi, API2);
    yield put(fetchAddressStartSuccess(addressStartInfo.results[0]));
    yield put(fetchAddressEndSuccess(addressEndInfo.results));
    const calculateRouteApi = yield (
      `${calculateRouteUrl}${addressStartInfo.results[0].position.lat},${addressStartInfo.results[0].position.lon}:${addressEndInfo.results[0].position.lat},${addressEndInfo.results[0].position.lon}/json?key=${API_KEY}`
    );
    const routeInfo = yield call(getApi, calculateRouteApi);
    yield put(fetchRouteInfoSuccess(routeInfo.routes[0].summary));
  }
  catch (error) {
    yield put(fetchMapError());
    console.error(error);
  }
};

function* mapSaga() {
  yield takeLatest(fetchMap.type, fetchMapHandler);
};

export default mapSaga;