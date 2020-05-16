import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [{
    id: "1",
    description: "groceries",
    note: "from Jack's",
    amount: 5000,
    createdAt: 0
}, {
    id: "2",
    description: "medium coffee",
    note: "food truck around the block from work",
    amount: 200,
    createdAt: moment(0).add(5, "days").valueOf()
}, {
    id: "3",
    description: "gas bill",
    amount: 70000,
    createdAt: moment(0).subtract(5, "days").valueOf()
}];

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