import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider, 
  CssBaseline,
  Grid,
  LinearProgress,
} from '@material-ui/core/'
import { 
  loadConfig,
} from './redux/app/actions'
import {
  themeLight, 
  themeDark,
} from './theme'
import {
  Topbar,
  Individual,
  Device,
  Mapbox,
  Location,
  Avatars,
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
  let progressColor = `primary`
  if ( darkMode ) progressColor = `secondary`

  const individualSlice = useSelector(state => state.individual)
  const {
    individual,
  } = individualSlice

  React.useEffect(() => {
    const {
      configLoading,
      configLoaded,
    } = appSlice
    if (!configLoading && !configLoaded) loadConfig()
  }, [appSlice])
  
  return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
          <CssBaseline />
          <Individual />
          { !individual ? <LinearProgress color={ progressColor } />
            : <div className={classes.localify}>
                <Topbar /> 
                <div className={ clsx( classes.drawerHeader )} />
                <div className={clsx( classes.content ) }>

                  <Grid container>
                  
                    <Grid item xs={ 12 } sm={ 4 }>
                      <Avatars />
                      <Device />
                      <Location />
                    </Grid>

                    
                    <Grid item xs={ 12 }  sm={ 8 }>
                      <Mapbox />
                    </Grid>
                    
                  </Grid>
                </div>
            </div>
          }
        </MuiThemeProvider> 
}
