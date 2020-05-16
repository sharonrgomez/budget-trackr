import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
    const action = removeExpense({ id: "12345" });
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "12345" });
});

test("should set up edit expense action object", () => {
    const action = editExpense("12345", {
        description: "new desc value",
        amount: 5.50
    });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "12345",
        updates: {
            description: "new desc value",
            amount: 5.50
        }
    });
});

test("should set up add expense action object with provided values", () => {
    const expenseData = {
        description: "Small Banana Smoothie",
        note: "From Mike's corner store",
        amount: 3550,
        createdAt: 1234000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should set up add expense action object with default values", () => {
    const expenseData = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});