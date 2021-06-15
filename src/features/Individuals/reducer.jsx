import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  initting,
  initted,
  ting,
  id,
  individual,
} from "./actions"

export const individualSlice = {
  error: null,
  ting: null,
  initting: false,
  initted: false,
  id: null,
  individual: null, 
}

const individualReducer = createReducer( individualSlice, {

  [individual]: (state, action) => {
    state.individual = action.individual
    return state
  },
   
  [id]: (state, action) => {
    state.id = action.id
    return state
  },

  [ting]: (state, action) => {
    state.ting = action.ting
    return state
  },

  [initting]: (state, action) => {
    state.initting = action.initting
    return state
  },

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { individualReducer }
