import { CREATE_SESSION, DESTROY_SESSION } from '../constants/session';

const initialState = {
    authenticated: false
}

export default function session(state = initialState, action) {
    switch (action.type) {
        case CREATE_SESSION:
            return {
                ...state,
                authenticated: true
            }
        case DESTROY_SESSION:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state;
    }
}