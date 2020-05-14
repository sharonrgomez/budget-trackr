// set text filter
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// sort by date
export const sortByDate = (sortBy) => ({
    type: "SORT_BY_DATE",
    sortBy
});

// sort by amount
export const sortByAmount = (sortBy) => ({
    type: "SORT_BY_AMOUNT",
    sortBy
});

// set start date
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// set end date
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});
