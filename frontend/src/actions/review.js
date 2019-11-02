import { FINISH_SIGNATURE_REVIEW, CLEAR_SIGNATURE_ASSETS, REDO_SIGNATURE } from '../constants/review';

export const finishSignatureReviewAction = () => ({
    type: FINISH_SIGNATURE_REVIEW,
});

export const clearSignatureAssetsAction = (payload) => ({
    type: CLEAR_SIGNATURE_ASSETS
});

export const redoSignatureAction = (payload) => ({
    type: REDO_SIGNATURE
});
