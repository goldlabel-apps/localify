import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

import {
    makeStyles,
    // Avatar,
    AppBar,
    Toolbar,
    CardHeader,
    Typography,
} from '@material-ui/core/'
import {
  ThumbMenu,
  Auth,
} from './'

const useStyles = makeStyles((theme) => ({
  topbar: {
  },
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
  const {
    config,
    darkMode,
  } = appSlice  
  const {
    title,
  } = config

  return  <AppBar
              position={ `fixed` }
              color={ `primary` }
              className={ clsx( classes.appBar )}>
              <Toolbar>
                <CardHeader 
                  disableTypography
                  title={ <Typography 
                            variant={ `h6` }
                            className={ clsx( darkMode ? classes.darkMode : null ) }>
                            { title }
                          </Typography>
                        }
                  /> 
                <div className={ clsx( classes.grow ) } />
                <ThumbMenu />
                <Auth />               
              </Toolbar>
            </AppBar>
}

/*
avatar={ <Avatar src={ darkMode ? icon.dark : icon.light } /> }

subheader={ <Typography 
                                variant={ `body2` }
                                className={ clsx( darkMode ? classes.darkMode : null ) }>
                                { description }
                              </Typography> 
                            }

*/