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
  setPath,
} from './redux/app/actions'
import {
  themeLight, 
  themeDark,
} from './theme'
import {
  Topbar,
  Device,
  Location,
  Avatars,
  Mapbox,
} from './components'
import {
  Individuals,
} from './features/Individuals'
import { 
  initIndividual,
} from './features/Individuals/actions'


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
  const individualSlice = useSelector(state => state.individual)

  React.useEffect(() => {
    const {
      initted,
      initting,
    } = individualSlice
    if (!initted && !initting) initIndividual()
  }, [ individualSlice ]) 

  React.useEffect(() => {
    const {
      configLoading,
      configLoaded,
    } = appSlice
    if (!configLoading && !configLoaded) loadConfig()
  }, [appSlice])
  

  let theme = themeLight
  const {
    darkMode,
    path,
  } = appSlice
  if ( darkMode ) theme = themeDark
  let progressColor = `primary`
  if ( darkMode ) progressColor = `secondary`
  const {
    id,
  } = individualSlice
  let showIndividuals = false
  const actualPath = window.location.pathname
  if ( actualPath !== path ) setPath (actualPath)
  if ( path === `/individuals` ||  actualPath === `/individuals`) showIndividuals = true 

  return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
          <CssBaseline />
          { !id ? <React.Fragment>
                    <LinearProgress color={ progressColor } />
                    <Topbar /> 
                  </React.Fragment>
            : <div className={classes.localify}>
                <Topbar /> 
                <div className={ clsx( classes.drawerHeader )} />
                <div className={clsx( classes.content ) }>
                  { showIndividuals ? <Individuals /> : <Grid container>
                    <Grid item xs={ 12 } sm={ 4 }>
                      <Avatars />
                      <Device />
                      <Location />
                    </Grid>

                    <Grid item xs={ 12 }  sm={ 8 }>
                      <Mapbox />
                    </Grid>
                  </Grid> }
                </div>
            </div>
          }
        </MuiThemeProvider> 
}

/*

*/