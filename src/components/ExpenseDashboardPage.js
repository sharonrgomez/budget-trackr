import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <React.Fragment>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </React.Fragment>
);

export default ExpenseDashboardPage;