import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  overlay,
  path,
} from "./actions"

export const appSlice = {
  open: false,
  overlay: false,
  path: `/`,
}

const appReducer = createReducer( appSlice, {

  [path]: (state, action) => {
    state.path = action.path
    return state
  },

  [open]: (state, action) => {
    state.open = action.open
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
