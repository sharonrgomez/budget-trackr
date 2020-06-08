import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

test("should generate set text filter action object with provided values", () => {
    const text = "filtered"
    expect(setTextFilter(text)).toEqual({
        type: "SET_TEXT_FILTER",
        text: "filtered"
    });
});

test("should generate set text filter action object with default values", () => {
    expect(setTextFilter()).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("should generate sort by date action object", () => {
    expect(sortByDate("date")).toEqual({
        type: "SORT_BY_DATE",
        sortBy: "date"
    });
});

test("should generate sort by amount action object", () => {
    expect(sortByAmount("amount")).toEqual({
        type: "SORT_BY_AMOUNT",
        sortBy: "amount"
    });
});