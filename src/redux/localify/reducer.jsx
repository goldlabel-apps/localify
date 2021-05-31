import { createReducer } from '@reduxjs/toolkit'
import { fakeTrips } from './fakeTrips'
import {
  trips,
  subscribing,
  subscribed,
  updating,
  updated,
} from "./actions"

export const localifySlice = {
  trips: fakeTrips,
  subscribing: false,
  subscribed: false,
  updating: false,
  updated: false,
}

const localifyReducer = createReducer( localifySlice, {

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
