import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import filterReducer from "./reducers/filters";
import expenseReducer from "./reducers/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    amount: 450,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 500,
    createdAt: -1000
}));

const elec = store.dispatch(addExpense({
    description: "Electricity bill",
    amount: 600,
    createdAt: -1500
}));

store.dispatch(addExpense({
    description: "cuppa joe",
    amount: 250,
    createdAt: 500
}));

store.dispatch(setTextFilter("bill"));
store.dispatch(sortByAmount());
store.dispatch(removeExpense({ id: elec.expense.id }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));