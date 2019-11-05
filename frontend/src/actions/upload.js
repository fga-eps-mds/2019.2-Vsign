import {
    UPLOAD_VIDEO, UPLOAD_AUDIO, UPLOAD_IMAGES,
    CHECK_SIGNATURE_FILES_UPLOADED,
    SET_AUDIO_UPLOAD_STATUS, SET_IMAGES_UPLOAD_STATUS,
    SET_VIDEO_UPLOAD_STATUS, ATTACH_CONTRACT_FILES
} from '../constants/upload';

export const uploadVideoAction = () => ({
    type: UPLOAD_VIDEO
});

export const uploadAudioAction = () => ({
    type: UPLOAD_AUDIO
});

export const uploadImagesAction = () => ({
    type: UPLOAD_IMAGES
});

export const checkSignatureFilesUploadedAction = () => ({
    type: CHECK_SIGNATURE_FILES_UPLOADED
});

export const setAudioUploadStatusAction = (payload) => ({
    type: SET_AUDIO_UPLOAD_STATUS,
    payload
});

export const setVideoUploadStatusAction = (payload) => ({
    type: SET_VIDEO_UPLOAD_STATUS,
    payload
});

export const setImagesUploadStatusAction = (payload) => ({
    type: SET_IMAGES_UPLOAD_STATUS,
    payload
});

export const attachContractFilesAction = (payload) => ({
    type: ATTACH_CONTRACT_FILES,
    payload
});
