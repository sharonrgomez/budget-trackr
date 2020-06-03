import { addExpense, editExpense, removeExpense, startAddExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("should add expense to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "new computer",
        amount: 100000,
        note: "",
        createdAt: 193481204
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test("should set up add expense action object with default values", () => {
//     const expenseData = {
//         description: "",
//         note: "",
//         amount: 0,
//         createdAt: 0
//     };
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });
// });