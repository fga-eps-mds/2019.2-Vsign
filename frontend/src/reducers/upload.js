import {
    SET_VIDEO_UPLOAD_STATUS, SET_AUDIO_UPLOAD_STATUS,
    SET_IMAGES_UPLOAD_STATUS
} from '../constants/upload';

const initial = {
    video: {
        uploading: false,
        success: false,
        error: false,
        signedBlobId: null
    },
    audio: {
        uploading: false,
        success: false,
        error: false,
        signedBlobId: null
    },
    images: {
        uploading: false,
        success: false,
        error: false,
        signedBlobIds: null
    },
};

export default function upload(state = initial, action) {
    switch (action.type) {
        case SET_VIDEO_UPLOAD_STATUS:
            return {
                ...state,
                video: {
                    ...state.video,
                    ...action.payload
                }
            };
        case SET_AUDIO_UPLOAD_STATUS:
            return {
                ...state,
                audio: {
                    ...state.audio,
                    ...action.payload
                }
            };
        case SET_IMAGES_UPLOAD_STATUS:
            return {
                ...state,
                images: {
                    ...state.images,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}