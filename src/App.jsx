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
import {
  initPingPong
} from './redux/pingpong/actions'
import Localify from './Localify'

export default function App() {

    const appSlice = useSelector(state => state.app)
    const pingpongSlice = useSelector(state => state.pingpong)
    let theme = themeLight
    const {
      darkMode,
    } = appSlice
    if ( darkMode ) theme = themeDark

    React.useEffect(() => {
      const {
        initted,
        initting,
      } = pingpongSlice
      if (!initted && !initting) initPingPong()
    }, [pingpongSlice])

    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
              <CssBaseline />
              <Overlay />
              <Localify />
            </MuiThemeProvider> 
}
