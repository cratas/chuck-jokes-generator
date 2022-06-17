import { call, put } from "redux-saga/effects";
import { setCategories, setCurrentCategory } from "../categoriesSlice";
import { requestGetCategories } from "../requests/categories";

export function* handleGetCategories(action) {
  try {
    // const { payload } = action; // u can destructure payoload
    const response = yield call(requestGetCategories);
    const { data } = response;
    yield put(setCategories({ ...data }));
  } catch (err) {
    console.log(err);
  }
}
