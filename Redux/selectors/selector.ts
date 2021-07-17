import { StateType } from "../store"

export const selectImages = (state: StateType) => {
  return state.main.images
}

export const selectId = (state: StateType) => {
  return state.main.id
}