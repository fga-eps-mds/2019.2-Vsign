import { all, takeEvery } from 'redux-saga/effects';
import { SET_SIGNATURE_ASSETS } from '../constants/record';
import { history } from '../store';

function* handleSetSignatureAssets(action) {
    // history.push('/review');
}

function * watchSetSignatureAssets() {
    yield takeEvery(SET_SIGNATURE_ASSETS, handleSetSignatureAssets);
}

export default function* rootSessionSaga() {
    yield all([
        watchSetSignatureAssets(),
    ]);
}