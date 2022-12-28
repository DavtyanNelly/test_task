import { configureStore } from "@reduxjs/toolkit";
import { organizationApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [organizationApi.reducerPath]: organizationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(organizationApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
