import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>You have no expenses.</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);