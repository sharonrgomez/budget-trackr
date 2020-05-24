import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";

test("should render expenses summary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2345} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render expenses summary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={25} expensesTotal={12345634} />);
    expect(wrapper).toMatchSnapshot();
});
