import React from "react";
import { shallow } from "enzyme";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import moment from "moment";

let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}
        />);
});

test("should render expenselistfilters", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render expenselistfilters with given data", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "water";
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test("should handle sortbyamount", () => {
    const value = "amount";
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle sortbydate", () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should handle date changes", () => {
    const startDate = moment(0).add(5, "days");
    const endDate = moment(0).add(20, "days");
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test("should handle date focus changes", () => {
    const calendarFocused = "endDate";
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});