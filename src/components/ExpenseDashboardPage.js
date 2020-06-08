import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </>
);

export default ExpenseDashboardPage;