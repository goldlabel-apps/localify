import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    AppBar,
    Toolbar,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/'
import {
  TopRightMenu,
} from './'
import { 
  routeTo,
} from '../redux/app/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  grow:{
    flexGrow: 1,
  },
  darkMode:{
    color: theme.palette.common.white,
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
}))

export default function Topbar() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const authSlice = useSelector(state => state.auth)
  const {
    authed,
  } = authSlice 
  const {
    config,
    darkMode,
  } = appSlice  
  if (!config) return null
  const {
    title,
  } = config

  let iconColor = `primary`
  if ( darkMode ) iconColor = `secondary`

  return  <AppBar
              position={ `fixed` }
              color={ `primary` }
              className={ clsx( classes.appBar )}>
              <Toolbar>
                <CardHeader 
                  disableTypography
                  title={ <Typography 
                            variant={ `h4` }
                            className={ clsx( darkMode ? classes.darkMode : null ) }>
                            { title }
                          </Typography>
                        }
                  /> 
                <div className={ clsx( classes.grow ) } />
                { authed ? <IconButton
                              onClick={ ( e ) => {
                                e.preventDefault()
                                routeTo( `/individuals` )
                              }}>
                              <Icon icon={`agile`} color={ iconColor } />
                           </IconButton> : null }
                <TopRightMenu />
              </Toolbar>
            </AppBar>
}
