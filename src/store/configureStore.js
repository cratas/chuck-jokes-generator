import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import categoriesReducer from "./categoriesSlice";
import currentCategoryReducer from "./currentCategorySlice";

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// combining all reducers into one object
const reducer = combineReducers({
  categories: categoriesReducer,
  currentCategory: currentCategoryReducer,
});

// creating redux store and add saga middleware into array of middlewares
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

// start saga listener
sagaMiddleware.run(watcherSaga);

export default store;
