import { all, select, call, takeEvery } from 'redux-saga/effects';
import { FINISH_SIGNATURE_REVIEW } from '../constants/review';
import { upload } from '../components/ReviewPage/services';

function* handleFinishSignatureReview(action) {
    const { video } = yield select(state => state.record);
    const { signedBlobId } = yield call(upload, video);
    console.log(signedBlobId);
}

function * watchFinishSignatureReview() {
    yield takeEvery(FINISH_SIGNATURE_REVIEW, handleFinishSignatureReview);
}

export default function* rootSessionSaga() {
    yield all([
        watchFinishSignatureReview()
    ]);
}