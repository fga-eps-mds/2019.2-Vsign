import { SET_NAME } from "../constants/user";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}
