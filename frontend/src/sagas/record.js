import { all, select, takeEvery } from 'redux-saga/effects';
import { SET_SIGNATURE_ASSETS } from '../constants/record';
import { REVIEW_URL } from '../constants/routes';
import { history } from '../store';

function* handleSetSignatureAssets(action) {
    const { video, audio } = yield select(state => state.record);
    if (audio && video) {
        console.log(audio)
        console.log(video)
        history.push(REVIEW_URL);
    }
}

function * watchSetSignatureAssets() {
    yield takeEvery(SET_SIGNATURE_ASSETS, handleSetSignatureAssets);
}

export default function* root() {
    yield all([
        watchSetSignatureAssets()
    ]);
}