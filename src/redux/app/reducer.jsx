// import { getHistory } from '../../'
import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  overlay,
} from "./actions"


// const history = getHistory()
// console.log ( 'history', history )
export const appSlice = {
  open: false,
  overlay: false,
  path: ``,
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
