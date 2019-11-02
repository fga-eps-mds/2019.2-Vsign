import { all, select, call, put, takeEvery } from 'redux-saga/effects';
import { FINISH_SIGNATURE_REVIEW, REDO_SIGNATURE } from '../constants/review';
import { setSignatureAssetsAction } from '../actions/record';
import { upload } from '../components/ReviewPage/services';
import { history } from '../store';


function* handleFinishSignatureReview(action) {
    const { video } = yield select(state => state.record);
    const { signedBlobId } = yield call(upload, video);
    console.log(signedBlobId);
}

function * watchFinishSignatureReview() {
    yield takeEvery(FINISH_SIGNATURE_REVIEW, handleFinishSignatureReview);
}


function* handleRedoSignature(action) {
    history.push('/record');
    yield put(setSignatureAssetsAction({}));
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