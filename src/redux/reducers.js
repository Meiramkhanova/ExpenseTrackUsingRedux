import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";

const initialState = {
  list: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                name: action.payload.editedName,
                amount: action.payload.editedAmount,
                date: action.payload.editedDate,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default itemsReducer;
