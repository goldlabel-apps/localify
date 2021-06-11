import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const individualSlice = {
  error: null,
  // individualObj: {},
}

const individualReducer = createReducer( individualSlice, {
 
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { individualReducer }
