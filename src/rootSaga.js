import { all } from "redux-saga/effects";
import mapSaga from "./features/mapSaga";

export default function* rootSaga() {
  yield all([
    mapSaga(),
  ]);
};