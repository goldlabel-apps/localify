import { createReducer } from '@reduxjs/toolkit'
import {
  overlay,
  path,
  title,
  darkMode,
  rightMenuOpen,
} from "./actions"

export const appSlice = {
  title: `Dashboard`,
  darkMode: false,
  path: `/`,
  overlay: false,
  helpOn: true,
  rightMenuOpen: false,
}

const appReducer = createReducer( appSlice, {

  [rightMenuOpen]: (state, action) => {
    state.rightMenuOpen = action.rightMenuOpen
    return state
  },

  [darkMode]: (state, action) => {
    state.darkMode = action.darkMode
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
