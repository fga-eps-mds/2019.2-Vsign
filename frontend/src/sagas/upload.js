import { all, select, call, put, takeEvery } from 'redux-saga/effects';
import { base64StringToBlob } from 'blob-util';
import {
    setVideoUploadStatusAction, setAudioUploadStatusAction,
    setImagesUploadStatusAction, checkSignatureAssetsUploadedAction
} from '../actions/upload';
import { 
    UPLOAD_VIDEO, UPLOAD_AUDIO, UPLOAD_IMAGES,
    CHECK_SIGNATURE_ASSETS_UPLOADED
} from '../constants/upload';
import { upload } from '../utils/services';
import { history } from '../store';


function* handleUploadVideo() {
    const { video } = yield select(state => state.record);

    try {

        // Inicia upload do áudio.
        yield put(setVideoUploadStatusAction({
            uploading: true
        }));
        
        const { signedBlobId } = yield call(upload, video);

        // Upload do vídeo concluído.
        yield put(setVideoUploadStatusAction({
            uploading: false,
            success: true
        }));

        yield put(checkSignatureAssetsUploadedAction());
        
        console.log(signedBlobId);
    } catch (err) {
        // Se foi erro de conexão, tentar refazer upload.
        yield put(setVideoUploadStatusAction({
            uploading: false,
            error: true
        }));
    }
}

function* handleUploadAudio() {
    const { audio } = yield select(state => state.record);
    const { blob } = audio;
    const name = `audio-${Date.now()}.webm`;
    blob.name = name;

    try {
        // Inicia upload do áudio.
        yield put(setAudioUploadStatusAction({
            uploading: true
        }));
        
        const { signedBlobId } = yield call(upload, blob);

        // Upload do vídeo concluído.
        yield put(setAudioUploadStatusAction({
            uploading: false,
            success: true
        }));

        yield put(checkSignatureAssetsUploadedAction());
        
        console.log(signedBlobId);
    } catch (err) {
        // Se foi erro de conexão, tentar refazer upload.
        yield put(setAudioUploadStatusAction({
            uploading: false,
            error: true
        }));
    }
}

function* handleUploadImages() {
    const signedBlobIds = [];
    const { images } = yield select(state => state.record);
    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * (images.length - 1 ));   
        const image = images[randomIndex];
        const imageSring = image.split('data:image/png;base64,').join('');
        const blob = base64StringToBlob(imageSring, 'image/jpeg');
        const name = `image-${Date.now()}${randomIndex}.jpg`;
        blob.name = name;
        const { signedBlobId } = yield call(upload, blob);
        signedBlobIds.push(signedBlobId);
    }
    console.log(signedBlobIds);
}

function * watchUploadVideo() {
    yield takeEvery(UPLOAD_VIDEO, handleUploadVideo);
}

function * watchUploadImages() {
    yield takeEvery(UPLOAD_IMAGES, handleUploadImages);
}

function * watchUploadAudio() {
    yield takeEvery(UPLOAD_AUDIO, handleUploadAudio);
}

function* handleCheckSignatureAssetsUploaded() {
    const { video, audio, images } = yield select(state => state.upload);

    // Se todos os assets foram carregados na nuvem, o usuário deverá ser redirecionado
    // para uma página de sucesso.
    if (video.success && audio.success && images.success) {
        history.push('/received');
    }
}

function * watchCheckSignatureAssetsUploaded() {
    yield takeEvery(CHECK_SIGNATURE_ASSETS_UPLOADED, handleCheckSignatureAssetsUploaded);
}

export default function* root() {
    yield all([
        watchUploadAudio(),
        watchUploadImages(),
        watchUploadVideo(),
        watchCheckSignatureAssetsUploaded()
    ]);
}