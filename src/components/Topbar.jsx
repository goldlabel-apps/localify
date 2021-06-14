import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    AppBar,
    Toolbar,
    CardHeader,
    Typography,
} from '@material-ui/core/'
import {
  TopRightMenu,
} from './'

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
                            variant={ `h4` }
                            className={ clsx( darkMode ? classes.darkMode : null ) }>
                            { title }
                          </Typography>
                        }
                  /> 
                <div className={ clsx( classes.grow ) } />
                <TopRightMenu />
              </Toolbar>
            </AppBar>
}
