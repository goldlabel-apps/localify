import React from 'react'
import clsx from 'clsx'
import { Icon } from '../theme'
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
  Main,
} from './'


const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  localify: {
    display: 'flex',
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
    // necessary for content to be below app bar
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
}))

export default function Localify() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState( false )

  const handleDrawerOpen = () => {
    setOpen( true )
  }

  const handleDrawerClose = () => {
    setOpen( false )
  }

  return <div className={classes.localify}>
      <AppBar
        position={ `fixed` }
        className={ clsx( classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>

          <IconButton  
            className={ classes.homeBtn }
            aria-label={ `home` }
            edge={`end`}
            onClick={ ( e ) => {
              e.preventDefault()
            }}>
            <Icon icon={ `localify` } color={ `secondary` } />
          </IconButton>

          <Typography variant="h6" noWrap className={classes.title}>
            @localify
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <Icon icon={ `menu` } />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Main />
      </div>

      
      <Drawer
        open={ open }
        className={ clsx( classes.drawer )}
        variant="persistent"
        anchor={ `right` }
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <Icon icon={ `left`} /> : <Icon icon={ `right`} /> }
          </IconButton>
        </div>
        
        <RightMenu />
      </Drawer>

    </div>
}
