import { createReducer } from '@reduxjs/toolkit'
import {
  trips,
  subscribing,
  subscribed,
  updating,
  updated,
  selected,
  newTrip,
  selectedFirst,
  createOpen,
} from "./actions"

export const localifySlice = {
  createOpen: false,
  newTrip: {
    title: ``,
  },
  trips: [],
  subscribing: false,
  subscribed: false,
  updating: false,
  updated: false,
  selected: null,
  selectedFirst: false,
}

const localifyReducer = createReducer( localifySlice, {
 
  [createOpen]: (state, action) => {
    state.createOpen = action.createOpen
    return state
  },
  
  [selectedFirst]: (state, action) => {
    state.selectedFirst = action.selectedFirst
    return state
  },
  
  [newTrip]: (state, action) => {
    state.newTrip = action.newTrip
    return state
  },

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
