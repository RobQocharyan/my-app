import { applyMiddleware, combineReducers, createStore } from "redux";
import { main_reducer } from "./main-reducer";
import  ThunkMiddleware  from "redux-thunk";
import { sidebar_reducer } from "./sidebar-reducer";

const rootReducer = combineReducers({
  main: main_reducer,
  sidebar: sidebar_reducer
})

export type StateType = ReturnType<typeof rootReducer>
type ActionType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionType<T extends {[key: string]: (...args: any[])=> any}> = ReturnType<ActionType<T>> 

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))