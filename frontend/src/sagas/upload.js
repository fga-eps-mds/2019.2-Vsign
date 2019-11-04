import { all, select, call, put, takeEvery } from 'redux-saga/effects';
import {
    setVideoUploadStatusAction, setAudioUploadStatusAction,
    setImagesUploadStatusAction, checkSignatureFilesUploadedAction,
    attachContractFilesAction
} from '../actions/upload';
import { 
    UPLOAD_VIDEO, UPLOAD_AUDIO, UPLOAD_IMAGES,
    CHECK_SIGNATURE_FILES_UPLOADED,
    ATTACH_CONTRACT_FILES
} from '../constants/upload';
import { upload } from '../utils/services';
import { history } from '../store';
import { shuffle, imageBlob } from '../utils';
import { attachContractFilesMutation } from '../graphql/mutations';


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
            success: true,
            signedBlobId
        }));

        // Verifica se todos os assets foram carregados.
        yield put(checkSignatureFilesUploadedAction());

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
            success: true,
            signedBlobId
        }));

        // Verifica se todos os assets foram carregados.
        yield put(checkSignatureFilesUploadedAction());
        
    } catch (err) {
        // Se foi erro de conexão, tentar refazer upload.
        yield put(setAudioUploadStatusAction({
            uploading: false,
            error: true
        }));
    }
}

function* handleUploadImages() {

    const { images } = yield select(state => state.record);
    const selectedImages = shuffle(images).slice(0, 3);
    
    // Inicia upload do áudio.
    yield put(setImagesUploadStatusAction({
        uploading: true
    }));
    
    const signedBlobIds = [];
    for (let index = 0; index < selectedImages.length; index++) {
        const blob = imageBlob(selectedImages[index]);
        try {
            const { signedBlobId } = yield call(upload, blob);
            signedBlobIds.push(signedBlobId);
        } catch (err) {
            index--;
        }
    }

    if (signedBlobIds.length === selectedImages.length) {
        // Upload do vídeo concluído.
        yield put(setImagesUploadStatusAction({
            uploading: false,
            success: true,
            signedBlobIds
        }));

        // Verifica se todos os assets foram carregados.
        yield put(checkSignatureFilesUploadedAction());
    } else {
        yield put(setImagesUploadStatusAction({
            uploading: false,
            error: true
        }));
    }
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
        yield put(attachContractFilesAction());
    }
}

function * handleAttachContractFiles() {
    const { video, audio, images } = yield select(state => state.upload);
    try {
        const variables = {
            video: video.signedBlobId,
            images: images.signedBlobIds,
            audio: audio.signedBlobId
        };
        const { success } = yield call(attachContractFilesMutation, variables);
        if (success) {
            history.push('/received');
        }
    } catch {
        // fazer alguma coisa.
    }

}

function * watchAttachContractFiles() {
    yield takeEvery(ATTACH_CONTRACT_FILES, handleAttachContractFiles);
}

function * watchCheckSignatureFilesUploaded() {
    yield takeEvery(CHECK_SIGNATURE_FILES_UPLOADED, handleCheckSignatureAssetsUploaded);
}

export default function* root() {
    yield all([
        watchUploadAudio(),
        watchUploadImages(),
        watchUploadVideo(),
        watchCheckSignatureFilesUploaded(),
        watchAttachContractFiles()
    ]);
}