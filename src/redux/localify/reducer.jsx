import { createReducer } from '@reduxjs/toolkit'
import { newTrip } from './newTrip'
import {
  trips,
  subscribing,
  subscribed,
  updating,
  updated,
  selected,
} from "./actions"

export const localifySlice = {
  trips: [],
  subscribing: false,
  subscribed: false,
  updating: false,
  updated: false,
  selected: null,
  newTrip,
}

const localifyReducer = createReducer( localifySlice, {
 
  [selected]: (state, action) => {
    state.selected = action.selected
    return state
  },
  
  [updated]: (state, action) => {
    state.updated = action.updated
    return state
  },
  
  [updating]: (state, action) => {
    state.updating = action.updating
    return state
  },

  [subscribing]: (state, action) => {
    state.subscribing = action.subscribing
    return state
  },

  [subscribed]: (state, action) => {
    state.subscribed = action.subscribed
    return state
  },


  [trips]: (state, action) => {
    state.trips = action.trips
    return state
  },

})

export { localifyReducer }
