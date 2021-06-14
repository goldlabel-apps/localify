import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  mapboxStyleId,
  updateNeeded,
} from "./actions"
import { mapboxStyles } from './mapboxStyles'

export const mapboxSlice = {
  error: null,
  updateNeeded: false,
  mapboxStyles,
  mapboxStyleId: `ckp80obpi08t717lfogdynhul`, 
}

const mapboxReducer = createReducer( mapboxSlice, {
  
  [updateNeeded]: (state, action) => {
    state.updateNeeded = action.updateNeeded
    return state
  },

  [mapboxStyleId]: (state, action) => {
    state.mapboxStyleId = action.mapboxStyleId
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { mapboxReducer }
