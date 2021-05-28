import { createReducer } from '@reduxjs/toolkit'
import { trips } from './trips'
import {
  error,
} from "./actions"

export const localifySlice = {
  error: null,
  trips,
}

const localifyReducer = createReducer( localifySlice, {

  [error]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { localifyReducer }
