import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider, 
  CssBaseline,
  IconButton,
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core/'
// import Routed from './Routed'
import {
  themeLight, 
  themeDark,
  Icon,
} from './theme'
import {
  initDocsfify,
} from './redux/docsify/actions'
// import {
//   Mapbox,
// } from './components'

const drawerWidth = 175

const useStyles = makeStyles((theme) => ({
  localify: {
    // display: 'flex',
  },
  mainContent: {
    border: '1px solid red',
  },
  btnTxt:{
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  iconBtn:{
    marginTop: theme.spacing( 0.5 ),
  },
  appBar: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    // color: theme.palette.primary.main,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  homeBtn:{
    marginRight: theme.spacing(0),
  },
  mightyIcon:{
    paddingTop: theme.spacing( 0.5 ),
    marginRight: theme.spacing( 2 ),
  },
  mightyBtn: {
    fontWeight: 'lighter',
    marginRight: theme.spacing( 2 ),
  },
  grow:{
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
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

  const docsifySlice = useSelector(state => state.docsify)

  React.useEffect(() => {
    const {
      configLoading,
      configLoaded,
    } = docsifySlice
    if (!configLoading && !configLoaded) initDocsfify()
  }, [docsifySlice])

  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  let theme = themeLight
  const {
    darkMode,
  } = appSlice
  if ( darkMode ) theme = themeDark
  const {
    config,
  } = docsifySlice
  if (! config ) return null
  const { 
    title, 
    description,
  } = config
  
  return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
          <CssBaseline />
          <div className={classes.localify}>
            <AppBar
              position={ `fixed` }
              color={ `default` }
              className={ clsx( classes.appBar )}>
              <Toolbar>
              <Grid container>
                <Grid item xs={ 12 } >
                  <Typography variant="h6" noWrap>
                  { title }
                </Typography>
                <Typography variant="body2" noWrap>
                  { description }
                </Typography>
                </Grid>
              </Grid>
                
                <div className={ clsx( classes.grow ) } />
                <IconButton
                  color={ `secondary` }
                  onClick={(e) => {
                    e.preventDefault()
                    console.log ('menu')
                  }}>
                  <Icon icon={ `menu` } color={ `secondary` } />
                </IconButton>
              </Toolbar>
            </AppBar>
            
            <div className={ clsx( classes.drawerHeader )} />
            
            <div className={clsx( classes.content ) }>
              content.
            </div>

          </div>
        </MuiThemeProvider> 
}


/*
<Mapbox />
<MenuDial />
<Grid container>
              <Grid item xs={ 12 } >
                <Routed />
              </Grid>
            </Grid>
*/