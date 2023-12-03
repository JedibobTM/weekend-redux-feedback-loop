import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feelings = (state={}, action) => {
    if (action.type === 'ADD') {
        const feelingsData = action.payload;
        console.log('feelingsData:', feelingsData)
        return {...state, feeling: feelingsData};
    } else if (action.type === 'SET_UNDERSTANDING_DATA') {
        const understandingData = action.payload;
        console.log('understandingData', understandingData);
        return {...state, understanding: understandingData};
    } else if (action.type === 'SET_SUPPORT_DATA') {
        const supportData = action.payload;
        console.log('supportData', supportData);
        return {...state, support: supportData};
    } else if (action.type === 'SET_COMMENTS_DATA') {
        const commentsData = action.payload;
        console.log('commentsData', commentsData);
        return {...state, comments: commentsData};
    } else if (action.type === 'CLEAR_DATA') {
        return {};
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