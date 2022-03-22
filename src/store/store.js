import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { mediaReducer } from '../reducers/mediaReducer';
import { uiReducer } from '../reducers/uiReducer';

const mainReducer = combineReducers({
    auth: authReducer,
    media: mediaReducer,
    ui: uiReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
);