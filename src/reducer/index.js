import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

export const initialState = {

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    ...rootReducer,
    router: routerReducer
});