import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount: ${amount} - Date: {createdAt}
            <button onClick={() => {
                dispatch(removeExpense({id}))
            }}
            >Remove</button>
        </p>
    </div >
);

export default connect()(ExpenseListItem);