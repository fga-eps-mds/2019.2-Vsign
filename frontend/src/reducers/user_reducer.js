import { SET_NAME } from "../actions/user/user_types";

const initialState = {
  name: "marcos"
};

export const userReducer = (state = initialState, action) => {
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
