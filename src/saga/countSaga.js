import { put, takeEvery } from 'redux-saga/effects';
import {countActions} from '../store/actions/count';
import { countTypes } from '../store/types/count' 


const deley = (ms) => new Promise( res => setTimeout(res, ms));

function* incrementWorker() {
    yield deley(2000);
    yield put(countActions.increment());
}

function* decrementWorker() {
    yield deley(2000);
    yield put(countActions.decrement());
}

export function* countWatcher() {
    yield takeEvery(countTypes.ASYNC_INCREMENT,incrementWorker);
    yield takeEvery(countTypes.ASYNC_DECREMENT,decrementWorker);
}