import {createStore} from "redux";

const reducer = (state, action) => {
    if (state === undefined) {
        return {number: 0}
    }
    if (action.type === )
    return state;
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;