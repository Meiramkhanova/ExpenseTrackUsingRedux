import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "adder",
  initialState: {
    list: [],
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
  },
});

export const { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } = counterSlice.actions;

export default counterSlice.reducer;
