import { SET_SIGNATURE_ASSETS } from '../constants/record';

const initial = {};

export default function record(state = initial, action) {
    switch (action.type) {
        case SET_SIGNATURE_ASSETS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}