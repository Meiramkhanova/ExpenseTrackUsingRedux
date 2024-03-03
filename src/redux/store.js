import { combineReducers, createStore } from "redux";
import itemsReducer from "./reducers";

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
