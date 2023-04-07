import { call, put, takeEvery } from 'redux-saga/effects';
import { usersActions } from '../store/actions/users';
import {usersTypes} from '../store/types/users';

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUsersWorker() {
    const data = yield call(fetchUsersFromApi);
    
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(usersActions.setUsers(json));
}

export function* userWatcher() {
    yield takeEvery(usersTypes.FETCH_USERS, fetchUsersWorker);
}