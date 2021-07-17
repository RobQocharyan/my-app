import { Dispatch } from "react"
import { api } from "../Api/api"
import { ImagesType } from "../types"
import { GetActionType } from "./store"

const initialState = {
  images: [] as ImagesType[],
  id: 0
}

type ActionType = GetActionType<typeof actions>
type InitialStateType = typeof initialState

export const main_reducer = (state = initialState, action: ActionType ): InitialStateType => {
  switch(action.type) {
    case'IMAGES_RECEIVED':
    return {
      ...state,
      images: action.payload.images
    }
    case'SET_ID':
    return {
      ...state,
      id: action.payload.id
    }
    case'SHOW_MORE':
    return {
      ...state,
      images: [...state.images, ...action.payload.images]
    }
    default:
      return state
  }
}


export const actions = {
  images_received: (images: ImagesType[]) => 
  ({type: 'IMAGES_RECEIVED', payload: {images}} as const),
  setId: (id: number) => 
  ({type: 'SET_ID', payload: {id}} as const),
  showMore: (images: ImagesType[]) => 
  ({type: 'SHOW_MORE', payload: {images}} as const)
}

export const getImages = (id: number) => {
  return async (dispatch: Dispatch<ActionType>) => {
    const data = await api.getImages(id)
    debugger
    dispatch(actions.images_received(data))
  }
}

export const showMore = (id: number) => {
  return async (dispatch: Dispatch<ActionType>) => {
    const data = await api.getImages(id)
    dispatch(actions.showMore(data))
  }
}
