import React from 'react'
import { useSelector } from 'react-redux'
import {
  themeLight, 
  themeDark,
} from './theme'
import {
  MuiThemeProvider,  
  createMuiTheme, 
  CssBaseline,
} from '@material-ui/core/'
import {
  Overlay,
} from './components'
import Localify from './Localify'

export default function App() {

    const appSlice = useSelector(state => state.app)
    let theme = themeLight
    const {
      darkMode,
    } = appSlice
    if ( darkMode ) theme = themeDark

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              <Localify />
            </MuiThemeProvider> 
}
