import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const localifySlice = {
  error: null,
}

const localifyReducer = createReducer( localifySlice, {
 
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { localifyReducer }
