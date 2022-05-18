import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMap,
  fetchMapError,
  fetchMapSuccess,
  fetchMap2Success
} from "./mapSlice";
import { getApi } from "../getApi";

function* fetchMapHandler({ payload: { query, query1 } }) {
  const API = `https://api.tomtom.com/search/2/geocode/${query}.json?key=PxU9DLSsk4z2MO6cLU7uj4lm8mhY9H9I`;
  const API2 = `https://api.tomtom.com/search/2/geocode/${query1}.json?key=PxU9DLSsk4z2MO6cLU7uj4lm8mhY9H9I`;
  
  try {
    const mapInfo = yield call(getApi, API);
    const mapInfo1 = yield call(getApi, API2);
    yield put(fetchMapSuccess(mapInfo.results[0]));
    yield put(fetchMap2Success(mapInfo1.results));
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