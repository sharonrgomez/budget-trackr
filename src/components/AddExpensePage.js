import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import React from "react";
import ExpenseForm from "./ExpenseForm";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit} />
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);