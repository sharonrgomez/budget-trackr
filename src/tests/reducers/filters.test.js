import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should set up default filter values", () => {
    const state = filterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortBy to amount", () => {
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: "SORT_BY_DATE"
    };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const action = {
        type: "SET_TEXT_FILTER",
        text: "test"
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe("test");
});

test("should set start date filter", () => {
    const startDate = moment();
    const action = {
        type: "SET_START_DATE",
        startDate
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test("should set end date filter", () => {
    const endDate = moment();
    const action = {
        type: "SET_END_DATE",
        endDate
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});