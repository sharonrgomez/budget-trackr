import getVisibleExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should filter expenses by text value", () => {
    const filters = {
        text: "bill",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[2]
    ]);
});

test("should filter expenses by start date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[1],
        expenses[0]
    ]);
});

test("should filter expenses by end date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0)
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test("should sort expenses by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ]);
});

test("should sort expenses by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);
});