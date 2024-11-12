import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../slices";
import { rtkApi } from "../api/rtkApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // Add the generated reducer as a specific top-level slice
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
