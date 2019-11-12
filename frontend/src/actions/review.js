import { FINISH_SIGNATURE_REVIEW, REDO_SIGNATURE } from '../constants/review';

export const finishSignatureReviewAction = () => ({
    type: FINISH_SIGNATURE_REVIEW,
});

export const redoSignatureAction = () => ({
    type: REDO_SIGNATURE
});
