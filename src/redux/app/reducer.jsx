import { createReducer } from '@reduxjs/toolkit'
import {
  overlay,
  path,
  title,
  helpOpen,
  rightMenuOpen,
} from "./actions"

export const appSlice = {
  overlay: false,
  path: `/`,
  title: `@localify`,
  helpOpen: true,
  rightMenuOpen: true,
}

const appReducer = createReducer( appSlice, {

  [rightMenuOpen]: (state, action) => {
    state.rightMenuOpen = action.rightMenuOpen
    return state
  },

  [helpOpen]: (state, action) => {
    state.helpOpen = action.helpOpen
    return state
  },

  [title]: (state, action) => {
    state.title = action.title
    return state
  },

  [path]: (state, action) => {
    state.path = action.path
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
