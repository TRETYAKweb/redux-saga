import { all } from 'redux-saga/effects';
import { userWatcher } from './usersSaga';
import { countWatcher } from './countSaga';

export function* rootWatcher() {
    yield all([userWatcher(), countWatcher()])
}

