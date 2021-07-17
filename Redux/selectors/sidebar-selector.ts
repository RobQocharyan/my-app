import { StateType } from "../store"

export const selectCategories = (state: StateType) => {
  return state.sidebar.categories
}