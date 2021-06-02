import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { appRouter } from './appRouter'
import { 
  goTo,
  toggleRightMenuOpen,
} from './redux/app/actions'
import { 
  subscribe,
  newTrip,
} from './redux/localify/actions'
import { Icon } from './theme'
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core/'
import {
  RightMenu,
} from './components'
import {
  HelpStart,
} from './components/Help'
import {
  Trips,
  TripNew,
  TripView,
} from './components/Trips'



const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  localify: {
    display: 'flex',
  },
  iconBtn:{
    marginTop: theme.spacing(0.5),
  },
  appBar: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    color: theme.palette.primary.main,
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
  title: {
    flexGrow: 1,
    fontWeight: 'lighter',
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
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  btnTxt:{
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
}))

export default function Localify() {

  const classes = useStyles()
  const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const localifySlice = useSelector( state => state.localify )
  const {
    title,
    rightMenuOpen,
  } = appSlice

  let routeOjb = appRouter()
  const { type } = routeOjb

  React.useEffect(() => {
    const {
      subscribing,
      subscribed,
    } = localifySlice
    if (!subscribing && !subscribed) subscribe()  
  }, [localifySlice])

  const handleDrawerOpen = () => {
    toggleRightMenuOpen( true )
  }

  const handleDrawerClose = () => {
    toggleRightMenuOpen( false )
  }

  return <div className={classes.localify}>
      <AppBar
        position={ `fixed` }
        className={ clsx( classes.appBar, {
          [classes.appBarShift]: rightMenuOpen,
        })}>
        <Toolbar>

         <IconButton
            color={`secondary`}
            edge={ `start` }
            className={ clsx( classes.iconBtn ) }
            onClick={ ( e ) => {
              goTo( `/`, `@localify` )
            }}>
            <Icon icon={ `localify` } color={ `secondary` } />
          </IconButton>

          <Typography variant="h6" noWrap className={classes.title}>
            { title }
          </Typography>
          
          <IconButton
            className={ clsx (classes.none)}
            color={ `secondary` }
            variant={ `text` } 
            onClick={ (e) => {
              e.preventDefault()
              newTrip()
            }}>
            <Icon icon={`new`} color={ `secondary` } />
            
          </IconButton>

          <IconButton
            color={`secondary`}
            edge={ `end` }
            onClick={ handleDrawerOpen }
            className={ clsx( rightMenuOpen && classes.hide )}>
            <Icon icon={ `left` } color={ `secondary` } />
          </IconButton>

        </Toolbar>
      </AppBar>
      
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: rightMenuOpen,
        })}
      >
        <div className={classes.drawerHeader} />

          { type === `view` ? <TripView /> : null }
          { type === `new` ? <TripNew /> : null }
          { type === `trips` ? <Trips /> : null }
          { type === `help` ? <HelpStart /> : null }
        
        </div>

      <Drawer
        open={ rightMenuOpen }
        className={ clsx( classes.drawer )}
        variant="persistent"
        anchor={ `right` }
        classes={{
          paper: classes.drawerPaper,
        }}>

        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <Icon icon={ `left`} color={ `secondary` } /> 
            : <Icon icon={ `right`} color={ `secondary` } /> }
          </IconButton>
        </div>
        
        <RightMenu />
        
      </Drawer>

    </div>
}
