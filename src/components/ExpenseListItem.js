import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format("$0,0.00")}
            -
            {moment(createdAt).format("MMMM Do, YYYY")}
        </p>
    </>
);

export default ExpenseListItem;