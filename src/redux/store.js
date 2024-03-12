import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/slice";

export default configureStore({
  reducer: {
    adder: reducer,
  },
});
