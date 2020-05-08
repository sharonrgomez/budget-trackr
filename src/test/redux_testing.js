// import React from "react";
// import ReactDOM from "react-dom";
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
});

store.dispatch({
    type: "INCREMENT"
});

store.dispatch({
    type: "INCREMENT"
});

store.dispatch({
    type: "RESET"
});

store.dispatch({
    type: "DECREMENT"
});

console.log(store.getState());

// ReactDOM.render(<p>test</p>, document.getElementById("app"));