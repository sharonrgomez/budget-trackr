import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render expenses summary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2345} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render expenses summary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={25} expensesTotal={12345634} />);
    expect(wrapper).toMatchSnapshot();
});
