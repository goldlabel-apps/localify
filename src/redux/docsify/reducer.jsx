import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  config,
  configLoading,
  configLoaded,
} from "./actions"

export const docsifySlice = {
  error: null,
  config: null,
  configLoading: false,
  configLoaded: false,
}

const docsifyReducer = createReducer( docsifySlice, {
 
  [config]: (state, action) => {
    state.config = action.config
    return state
  },

  [configLoading]: (state, action) => {
    state.configLoading = action.configLoading
    return state
  },

  [configLoaded]: (state, action) => {
    state.configLoaded = action.configLoaded
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { docsifyReducer }
