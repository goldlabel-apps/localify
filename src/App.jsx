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
  Localify,
} from './components'

export default function App() {

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              <Localify />
            </MuiThemeProvider> 
}
