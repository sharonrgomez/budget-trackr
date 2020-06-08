import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
import {
    addExpense,
    startAddExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref("expenses").set(expensesData).then(() => done());
});

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

test("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test("should add expense with provided values to database and store", (done) => {
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

test("should remove expense from database and store", (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return database.ref(`expenses/${id}`).once("value").then((snapshot) => {
            expect(snapshot.val()).toBe(null);
            done();
        });
    });
});

test("should edit expenses from firebase", (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    const updates = {
        description: "this is new desc",
        amount: 123456
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            amount: expenses[2].amount,
            createdAt: expenses[2].createdAt,
            note: expenses[2].note,
            description: updates.description,
            amount: updates.amount
        });
        done();
    });
});

test("should fetch expenses from firebase", (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});
