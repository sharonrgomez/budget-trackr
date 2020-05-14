import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;