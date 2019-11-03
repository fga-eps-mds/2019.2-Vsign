import { SET_SIGNATURE_ASSETS, CLEAR_SIGNATURE_ASSETS } from '../constants/record';

export const setSignatureAssetsAction = (payload) => ({
    type: SET_SIGNATURE_ASSETS,
    payload
});

export const clearSignatureAssetsAction = () => ({
    type: CLEAR_SIGNATURE_ASSETS
});
