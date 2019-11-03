import { all, select, call, put, takeEvery } from 'redux-saga/effects';
import { FINISH_SIGNATURE_REVIEW, REDO_SIGNATURE } from '../constants/review';
import { clearSignatureAssetsAction } from '../actions/record';
import { history } from '../store';
import { uploadVideoAction, uploadAudioAction, uploadImagesAction } from '../actions/upload';


function* handleFinishSignatureReview(action) {
    yield put(uploadVideoAction());
    yield put(uploadAudioAction());
    yield put(uploadImagesAction());
}

function * watchFinishSignatureReview() {
    yield takeEvery(FINISH_SIGNATURE_REVIEW, handleFinishSignatureReview);
}

function* handleRedoSignature() {
    history.push('/record');
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