import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

/*  
ADD_EXPENSE x
REMOVE_EXPENSE x
EDIT_EXPENSE x
SET_TEXT_FILTER x
SORT_BY_DATE x
SORT_BY_AMOUNT x
SET_START_DATE
SET_END_DATE
*/  

// add expense 
const addExpense = (
    {
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// remove expense
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// edit expense
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// set text filter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// sort by date
const sortByDate = (sortBy) => ({
    type: "SORT_BY_DATE",
    sortBy
});

// sort by amount
const sortByAmount = (sortBy) => ({
    type: "SORT_BY_AMOUNT",
    sortBy
});

// set start date
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// set end date
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

// expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// filters reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1; // show expenses new to old
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1; // show expenses high to low
        }
    });
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});