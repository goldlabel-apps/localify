import React from 'react'
import {
  theme, 
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

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              <Localify />
            </MuiThemeProvider> 
}
