import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamCoreApi } from "./services/SazamCore";
export const store = configureStore({
  //Redux store boiler plate code
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
