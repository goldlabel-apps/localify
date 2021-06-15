import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  authStateChanged,
  authed,
  isAuthing,
  dialog,
} from "./actions"

export const authSlice = {
  error: null,
  dialog: false,
  authStateChanged: false,
  authed: false,
  isAuthing: false,
}

const authReducer = createReducer(authSlice, {
  
  [dialog]: (state, action) => {
    state.dialog = action.dialog
    return state
  }, 
  
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
