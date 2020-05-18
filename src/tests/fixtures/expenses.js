import moment from "moment";

export default [{
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