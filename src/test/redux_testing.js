import { createStore } from "redux";

// action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

// reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => { // keeps track of changes. return value stops the subscription
    console.log(store.getState());
});

console.log("increment 5");
store.dispatch(incrementCount({
    incrementBy: 5
}));

console.log("increment 1");
store.dispatch(incrementCount());

console.log("decrement 5");
store.dispatch(decrementCount({
    decrementBy: 5
}));

console.log("decrement 1");
store.dispatch(decrementCount());

console.log("set count");
store.dispatch(setCount({
    count: 405
}));

console.log("reset");
store.dispatch(resetCount());

unsubscribe();