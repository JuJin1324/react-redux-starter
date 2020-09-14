import {createStore} from "redux";

export const TYPE_INCREMENT = 'INCREMENT';

const reducer = (state, action) => {
    if (state === undefined) {
        return {number: 0}
    }
    if (action.type === TYPE_INCREMENT) {
        return {...state, number: state.number + action.size};
    }
    return state;
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;