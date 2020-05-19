import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <React.Fragment>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit} />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);