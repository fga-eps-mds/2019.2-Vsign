import { all, select, call, put, takeEvery } from 'redux-saga/effects';
import { FINISH_SIGNATURE_REVIEW, REDO_SIGNATURE } from '../constants/review';
import { clearSignatureAssetsAction } from '../actions/record';
import { history } from '../store';
import { upload } from '../utils/services';

function* handleFinishSignatureReview(action) {
    const { audio, video, images } = yield select(state => state.record);
    const { signedBlobId: videoBlobId } = yield call(upload, video);
    const { signedBlobId: audioBlobId } = yield call(upload, audio.blob);

    // const imagesBlobId = [];
    // for (let index = 0; index < 3; index++) {
    //     const randomIndex = Math.floor(Math.random() * (images.length - 1 ));   
    //     const image = images[randomIndex];
    //     const { signedBlobId: imageBlobId } = yield call(upload, image);
    //     imagesBlobId.push(imageBlobId);
    // }
    // console.log(imagesBlobId);
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