import { FINISH_SIGNATURE_REVIEW, CLEAR_SIGNATURE_ASSETS } from '../constants/review';

export const finishSignatureReviewAction = () => ({
    type: FINISH_SIGNATURE_REVIEW,
});

export const clearSignatureAssetsAction = (payload) => ({
    type: CLEAR_SIGNATURE_ASSETS
});
