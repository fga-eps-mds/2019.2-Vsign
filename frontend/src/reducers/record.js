const initial = {};

export default function record(state = initial, action) {
    switch (action.type) {
        case 'SET_RECORD_ASSETS':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}