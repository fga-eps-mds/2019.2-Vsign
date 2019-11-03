import { SET_VIDEO_UPLOAD_STATUS, SET_AUDIO_UPLOAD_STATUS, SET_IMAGES_UPLOAD_STATUS } from '../constants/record';

const initial = {
    video: {
        uploading: false,
        success: false,
        error: false
    },
    audio: {
        uploading: false,
        success: false,
        error: false
    },
    images: {
        uploading: false,
        success: false,
        error: false
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
                    ...state.video,
                    ...action.payload
                }
            };
        case SET_IMAGES_UPLOAD_STATUS:
            return {
                ...state,
                video: {
                    ...state.video,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}