import { SET_NAME } from "./user_types";

export const setUserName = value => ({
  type: SET_NAME,
  payload: value
})