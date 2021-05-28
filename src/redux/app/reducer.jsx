import { createReducer } from '@reduxjs/toolkit'
import {
  overlay,
  path,
  title,
} from "./actions"

export const appSlice = {
  overlay: false,
  path: `/`,
  title: `@localify`,
}

const appReducer = createReducer( appSlice, {

  [title]: (state, action) => {
    state.title = action.title
    return state
  },

  [path]: (state, action) => {
    state.path = action.path
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
