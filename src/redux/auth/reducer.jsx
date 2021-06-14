import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  authStateChanged,
  authed,
  isAuthing,
} from "./actions"

export const authSlice = {
  error: null,
  authStateChanged: false,
  authed: false,
  isAuthing: false,
}

const authReducer = createReducer(authSlice, {
  
  [authStateChanged]: (state, action) => {
    state.authStateChanged = action.authStateChanged
    return state
  },

  [authed]: (state, action) => {
    state.authed = action.authed
    return state
  },

  [isAuthing]: (state, action) => {
    state.isAuthing = action.isAuthing
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { authReducer }
