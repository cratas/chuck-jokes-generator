import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import userReducer from "./userSlice";
import categoriesReducer from "./categoriesSlice";
// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// combining all reducers into one object
const reducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
});

// creating redux store and add saga middleware into array of middlewares
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

// start saga listener
sagaMiddleware.run(watcherSaga);

export default store;
