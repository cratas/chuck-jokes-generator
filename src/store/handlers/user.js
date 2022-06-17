import { call, put } from "redux-saga/effects";
import { setUser } from "../userSlice";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const { payload } = action; // u can destructure payoload
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (err) {
    console.log(err);
  }
}
