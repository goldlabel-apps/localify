import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const authSlice = {
  error: null,
  loggedin: false,
}

const authReducer = createReducer(authSlice, {
 
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { authReducer }
