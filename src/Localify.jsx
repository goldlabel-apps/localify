import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { appRouter } from './appRouter'
import {
  makeStyles,
  Drawer,
  AppBar,
  Grid,
  Toolbar,
  IconButton,
} from '@material-ui/core/'
import {
  toggleRightMenuOpen,
} from './redux/app/actions'
// import { 
//   subscribe,
// } from './redux/localify/actions'
import { Icon } from './theme'
import {
  Dashboard,
  RightMenu,
  Settings,
} from './components'
import {
  TList,
  TCreate,
  TView,
} from './components/Trips'

const drawerWidth = 175

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
  const appSlice = useSelector(state => state.app)
  const {
    rightMenuOpen,
  } = appSlice

  let routeOjb = appRouter()
  const { 
    type,
    id,
  } = routeOjb

  // const localifySlice = useSelector( state => state.localify )
  // React.useEffect(() => {
  //   const {
  //     subscribing,
  //     subscribed,
  //   } = localifySlice
  //   if (!subscribing && !subscribed) console.log ( 'subscribe()' )  
  // }, [localifySlice])

  const handleDrawerOpen = () => {
    toggleRightMenuOpen( true )
  }

  const handleDrawerClose = () => {
    toggleRightMenuOpen( false )
  }

  return <div className={classes.localify}>
      <AppBar
        position={ `fixed` }
        color={ `default` }
        className={ clsx( classes.appBar, {
          [classes.appBarShift]: rightMenuOpen,
        })}>
        <Toolbar>

        
          <div className={ clsx ( classes.grow ) } />
          
          <IconButton
            color={`secondary`}
            edge={ `end` }
            onClick={ handleDrawerOpen }
            className={ clsx( rightMenuOpen && classes.hide )}>
            <Icon icon={ `menu` } color={ `secondary` } />
          </IconButton>

        </Toolbar>
      </AppBar>
      
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: rightMenuOpen,
        })}
      >
        <div className={classes.drawerHeader} />
         <Grid container>
            <Grid item xs={ 12 } >
              <div>
                { type === `dashboard` ? <Dashboard /> : null }
                { type === `trip` ? <TView trip={{ id }} /> : null }
                { type === `create` ? <TCreate /> : null }
                { type === `trips` ? <TList /> : null }
                { type === `settings` ? <Settings /> : null }
              </div>
            </Grid>
          </Grid>
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
            <Icon icon={ `close`} color={ `secondary` } />
          </IconButton>
        </div>
        <RightMenu />
      </Drawer>
    </div>
}





/*


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

<Typography variant="h6" noWrap className={classes.mightyBtn}>
              { title }
            </Typography>
            
*/