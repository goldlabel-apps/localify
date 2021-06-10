import { createReducer } from '@reduxjs/toolkit'
import {
  overlay,
  path,
  darkMode,
  rightMenuOpen,
} from "./actions"

export const appSlice = {
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
