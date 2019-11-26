import { all, takeEvery } from 'redux-saga/effects';
import { history } from '../store';
import { CONTRACTS_URL } from '../constants/routes';
import { LOGIN } from '../constants/login';

function* handleLogin(action) {
    history.push(CONTRACTS_URL);
}

function * watchLogin() {
    yield takeEvery(LOGIN, handleLogin);
}

export default function* root() {
    yield all([
        watchLogin(),
    ]);
}