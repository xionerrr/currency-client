import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { currenciesAPI } from "./currencies/index";

const rootReducer = combineReducers({
  [currenciesAPI.reducerPath]: currenciesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(currenciesAPI.middleware),
  });
};
