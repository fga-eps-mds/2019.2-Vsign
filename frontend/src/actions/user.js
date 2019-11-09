import { SET_NAME } from "../constants/user";

export const setUserNameAction = value => ({
  type: SET_NAME,
  payload: value
});