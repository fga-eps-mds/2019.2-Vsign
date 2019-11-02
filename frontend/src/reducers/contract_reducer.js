import { SET_ORDER, SET_SCRIPT } from '../actions/contract/constract_types';

const initialState = {
  script: "",
  order: "",
}

export const contractReducer = (state = initialState, action) => {
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
