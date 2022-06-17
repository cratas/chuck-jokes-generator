import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "../handlers/user";
import { handleGetCategories } from "../handlers/categories";
import { setCategories } from "../categoriesSlice";

import { getUser } from "../userSlice";

// generic function listening for any redux dispatch
export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(setCategories.type, handleGetCategories);
}

