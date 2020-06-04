import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };

    render() {
        return (
            <React.Fragment>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />

                <button onClick={this.onRemove}
                >Remove</button>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);