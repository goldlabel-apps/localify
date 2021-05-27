import React from 'react'
import clsx from 'clsx'
import {
  theme, 
} from './theme'
import {
  makeStyles, 
  MuiThemeProvider,  
  createMuiTheme, 
  CssBaseline,
} from '@material-ui/core/'
import { 
  WordpressMenu, 
  Overlay,
  GithubMenu,
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    display: 'flex',
  },
}))

export default function App() {  

    const classes = useStyles()

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <CssBaseline />
              <Overlay />
              <div className={ clsx( classes.appWrap ) }>
                <WordpressMenu />
                <GithubMenu />
              </div>
            </MuiThemeProvider> 
}
