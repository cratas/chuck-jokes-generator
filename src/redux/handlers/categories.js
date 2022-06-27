import { call, put } from "redux-saga/effects";
import { setCategories } from "../store/reducers/categoriesSlice";
import { requestGetCategories } from "../requests/categories";

// redux saga handler
export function* handleGetCategories(action) {
  try {
    const response = yield call(requestGetCategories);
    const { data } = response;
    const formatedData = Object.values(data);

    yield put(setCategories(formatedData));
  } catch (err) {
    console.log(err);
  }
}
