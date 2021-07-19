import { Dispatch } from "react"
import { api } from "../Api/api"
import {  CategoryType} from "../types"
import { GetActionType } from "./store"

const initialState = {
  categories: null as null | CategoryType[]
}

type ActionType = GetActionType<typeof actions>
type InitialStateType = typeof initialState

export const sidebar_reducer = (state = initialState, action: ActionType ): InitialStateType => {
  switch(action.type) {
    case 'CATEGORIES_RECEIVED':
    return {
      ...state,
      categories: action.payload.categories
    }
    default:
      return state
  }
}


const actions = {
  categories_received: (categories: CategoryType[]) => 
  ({type: 'CATEGORIES_RECEIVED', payload: {categories}} as const)
}

export const getCategories = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    const data = await api.getCategories()
    dispatch(actions.categories_received(data))
  }
}

