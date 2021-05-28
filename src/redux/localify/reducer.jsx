import { createReducer } from '@reduxjs/toolkit'
// import { trips } from './trips'
import {
  trips,
} from "./actions"

export const localifySlice = {
  trips: [],
  subscribing: false,
  subscribed: false,
}

const localifyReducer = createReducer( localifySlice, {

  [trips]: (state, action) => {
    state.trips = action.trips
    return state
  },

})

export { localifyReducer }
