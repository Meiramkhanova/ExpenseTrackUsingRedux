import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const counterSlice = createSlice({
  name: "adder",
  initialState: {
    list: [],
    list_items: [],
    searchQuery: "",
  },
  reducers: {
    ADD_ITEM: (state, action) => {
      state.list.push(action.payload);
    },
    DELETE_ITEM: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    EDIT_ITEM: (state, action) => {
      const { id, editedName, editedAmount, editedDate } = action.payload;
      const itemIndex = state.list.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        // Update the item in the list
        state.list[itemIndex] = {
          ...state.list[itemIndex],
          name: editedName,
          amount: editedAmount,
          date: editedDate,
        };
      }
    },
    FETCH_ITEMS: (state, action) => {
      state.list_items = action.payload;
    },
    SEARCH_QUERY: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, FETCH_ITEMS, SEARCH_QUERY } =
  counterSlice.actions;

export function fetchItems() {
  return async function fetchItems(dispatch) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: FETCH_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };
}

export default counterSlice.reducer;
