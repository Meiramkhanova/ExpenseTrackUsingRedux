import { createSelector } from "reselect";

const getExpenses = (state) => state.adder.list;
const getSearchQuery = (state) => state.adder.searchQuery;

export const getFilteredExpenses = createSelector(
  [getExpenses, getSearchQuery],
  (expenses, searchQuery) => {
    return expenses.filter(
      (expense) =>
        expense.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expense.amount.includes(searchQuery)
    );
  }
);
