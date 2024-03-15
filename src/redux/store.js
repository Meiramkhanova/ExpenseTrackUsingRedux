import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slices/slice";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    adder: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});
