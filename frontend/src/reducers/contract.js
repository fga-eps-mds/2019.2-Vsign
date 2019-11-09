import { SET_ORDER, SET_SCRIPT } from '../constants/constract';

const initialState = {
  script: "",
  order: "",
}

export default function contractReducer(state = initialState, action) {
  switch (action) {
    case SET_SCRIPT:
      return {
        ...state,
        script: action.payload
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }
    default:
      return state;
  }
};
