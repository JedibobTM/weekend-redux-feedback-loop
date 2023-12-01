import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feelings = (state=[], action) => {
    if (action.type === 'ADD') {
        const feelingsData = action.payload;
        console.log('feelingsData:', feelingsData)
        return feelingsData;
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelings
    }),
    applyMiddleware(logger)
);

export default store;