import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider, 
  CssBaseline,
  Grid,
} from '@material-ui/core/'
import {
  themeLight, 
  themeDark,
} from './theme'
import {
  Topbar,
  Mapbox,
  Individual,
} from './components'

const useStyles = makeStyles((theme) => ({
  localify: {
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

export default function App() {

  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  let theme = themeLight
  const {
    darkMode,
  } = appSlice
  if ( darkMode ) theme = themeDark
  
  return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
          <CssBaseline />
          <div className={classes.localify}>
            <Topbar /> 
            <div className={ clsx( classes.drawerHeader )} />
            <div className={clsx( classes.content ) }>

            <Grid container>

                <Grid item xs={ 12 } sm={ 6 } >
                  <Individual />
                </Grid>

                <Grid item xs={ 12 } sm={ 6 } >
                  <Mapbox />
                </Grid>

              </Grid>

            </div>
          </div>
        </MuiThemeProvider> 
}
