import {
    UPLOAD_VIDEO, UPLOAD_AUDIO, UPLOAD_IMAGES,
    CHECK_SIGNATURE_ASSETS_UPLOADED,
    SET_AUDIO_UPLOAD_STATUS, SET_IMAGES_UPLOAD_STATUS,
    SET_VIDEO_UPLOAD_STATUS
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

export const checkSignatureAssetsUploadedAction = () => ({
    type: CHECK_SIGNATURE_ASSETS_UPLOADED
});

export const setAudioUploadStatusAction = () => ({
    type: SET_AUDIO_UPLOAD_STATUS
});

export const setVideoUploadStatusAction = () => ({
    type: SET_VIDEO_UPLOAD_STATUS
});

export const setImagesUploadStatusAction = () => ({
    type: SET_IMAGES_UPLOAD_STATUS
});
