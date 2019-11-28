import { all, put, takeEvery } from 'redux-saga/effects';
import { FINISH_SIGNATURE_REVIEW, REDO_SIGNATURE } from '../constants/review';
import { clearSignatureAssetsAction } from '../actions/record';
import { history } from '../store';
import { uploadVideoAction, uploadAudioAction, uploadImagesAction } from '../actions/upload';
import { RECORD_URL } from '../constants/routes';


function* handleFinishSignatureReview(action) {
    yield put(uploadVideoAction());
    yield put(uploadAudioAction());
    yield put(uploadImagesAction());
}

function * watchFinishSignatureReview() {
    yield takeEvery(FINISH_SIGNATURE_REVIEW, handleFinishSignatureReview);
}

function* handleRedoSignature() {
    history.push(RECORD_URL);
    yield put(clearSignatureAssetsAction());
}

function * watchRedoSignature() {
    yield takeEvery(REDO_SIGNATURE, handleRedoSignature);
}

export default function* rootSessionSaga() {
    yield all([
        watchFinishSignatureReview(),
        watchRedoSignature()
    ]);
}