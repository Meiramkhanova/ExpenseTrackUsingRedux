import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addItem = (name, amount, date) => ({
  type: ADD_ITEM,
  payload: { id: uuidv4(), name, amount, date },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const editItem = (id, editedName, editedAmount, editedDate) => ({
  type: EDIT_ITEM,
  payload: { id, editedName, editedAmount, editedDate },
});
