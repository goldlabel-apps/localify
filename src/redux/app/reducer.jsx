import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  overlay,
} from "./actions"

export const appSlice = {
  open: false,
  overlay: false,
}

const appReducer = createReducer( appSlice, {

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
