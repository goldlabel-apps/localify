import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

import {
    makeStyles,
    AppBar,
    Grid,
    Toolbar,
    Typography,
} from '@material-ui/core/'

import {
  ThumbMenu,
} from './'

const useStyles = makeStyles((theme) => ({
  topbar: {
  },
  grow:{
    flexGrow: 1,
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
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )

  return  <AppBar
              position={ `fixed` }
              color={ `primary` }
              className={ clsx( classes.appBar )}>
              <Toolbar>
              <Grid container>
                <Grid item xs={ 12 } >
                  <Typography variant="h6" noWrap>
                  { `title` }
                </Typography>
                <Typography variant="body2" noWrap>
                  { `description` }
                </Typography>
                </Grid>
              </Grid>
                <div className={ clsx( classes.grow ) } />
                <ThumbMenu />               
              </Toolbar>
            </AppBar>
}
