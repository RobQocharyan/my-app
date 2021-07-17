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
    case'CATEGORIES_RECEIVED':
    return {
      ...state,
      categories: action.payload.categoreis
    }
    default:
      return state
  }
}


const actions = {
  categoreis_received: (categoreis: CategoryType[]) => 
  ({type: 'CATEGORIES_RECEIVED', payload: {categoreis}} as const)
}

export const getCategories = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    const data = await api.getCategories()
    debugger
    dispatch(actions.categoreis_received(data))
  }
}

