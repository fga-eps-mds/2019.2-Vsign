import { all, takeEvery } from 'redux-saga/effects';
import { history } from '../store';
import { SET_CONTRACT } from '../constants/contract';
import { INSTRUCTIONS_URL } from '../constants/routes';

// eslint-disable-next-line
function* handleSetContract(action) {
    history.push(INSTRUCTIONS_URL);
}

function * watchSetContract() {
    yield takeEvery(SET_CONTRACT, handleSetContract);
}

export default function* rootSessionSaga() {
    yield all([
        watchSetContract(),
    ]);
}