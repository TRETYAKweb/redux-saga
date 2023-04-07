import {createStore , combineReducers, applyMiddleware} from 'redux';
import {countReducer as count, usersReducer as users} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    count,
    users
}) 

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);