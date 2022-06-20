import { takeLatest } from "redux-saga/effects";
import { handleGetCategories } from "../handlers/categories";
import { setCategories } from "../store/reducers/categoriesSlice";

// generic function listening for any redux dispatch
export function* watcherSaga() {
  yield takeLatest(setCategories.type, handleGetCategories);
}

