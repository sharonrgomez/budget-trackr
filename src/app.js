import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    amount: 4500,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: "Electricity bill",
    amount: 6000,
    createdAt: -1500
}));

store.dispatch(addExpense({
    description: "May Rent",
    amount: 25000,
    createdAt: 500
})); 

store.dispatch(addExpense({
    description: "Medium Coffee",
    amount: 250
})); 

store.dispatch(addExpense({
    description: "Large Banana Smoothie",
    amount: 500
}));

// store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));