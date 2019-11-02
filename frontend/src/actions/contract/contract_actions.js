import { SET_ORDER, SET_SCRIPT } from "./constract_types";

export const setOrder = value => ({
  type: SET_ORDER,
  payload: value,
})

export const setScript = value => ({
  type: SET_SCRIPT,
  payload: value
})