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
  // mapboxStyleId: `ck7picfb501sh1ipfwf7ab967`, // satellite
  mapboxStyleId: `ckpxgg3nw3unx17mv7ydukd5t`, // Nice & Light
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
