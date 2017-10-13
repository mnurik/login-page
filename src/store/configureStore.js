import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./../reducer";

export default (history) => {
    const middleware = routerMiddleware(history);
    return createStore(reducer, composeWithDevTools(applyMiddleware(middleware)));
};