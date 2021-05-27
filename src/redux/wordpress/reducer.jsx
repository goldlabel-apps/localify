import { createReducer } from '@reduxjs/toolkit'
import {
  open,
} from "./actions"

let pwaData = {}
if( window.pwaData ) pwaData = window.pwaData

export const wordpressSlice = {
  open: true,
  pwaData,
}

const wordpressReducer = createReducer( wordpressSlice, {

  [open]: (state, action) => {
    state.open = action.open
    return state
  },

})

export { wordpressReducer }
