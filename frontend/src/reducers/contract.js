import { SET_CONTRACT } from '../constants/contract';

const initialState = {};

export default function contractReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTRACT:
      return action.payload;
    default:
      return state;
  }
};
