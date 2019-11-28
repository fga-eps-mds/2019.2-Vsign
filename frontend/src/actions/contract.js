import { SET_ORDER, SET_SCRIPT } from "../constants/constract";

export const setOrderAction = value => ({
  type: SET_ORDER,
  payload: value,
})

export const setScriptAction = value => ({
  type: SET_SCRIPT,
  payload: value
})