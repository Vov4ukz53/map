import { call, put, takeLatest } from "redux-saga/effects";
import { getApi } from "../getApi";
import { url, API_KEY } from "../apiData";
import {
  fetchMap,
  fetchMapError,
  fetchAddressStartSuccess,
  fetchAddressEndSuccess,
} from "./mapSlice";

function* fetchMapHandler({ payload: { query, query1 } }) {
  const API = `${url}${query}.json?key=${API_KEY}`;
  const API2 = `${url}${query1}.json?key=${API_KEY}`;

  try {
    const addressStartInfo = yield call(getApi, API);
    const addressEndInfo = yield call(getApi, API2);
    yield put(fetchAddressStartSuccess(addressStartInfo.results[0]));
    yield put(fetchAddressEndSuccess(addressEndInfo.results));
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