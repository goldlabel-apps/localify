import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  panel: {
    margin: theme.spacing(),
  },
}))

export default function Auth() {
  
  const classes = useStyles()

  const appSlice = useSelector(state => state.app)
  const authSlice = useSelector(state => state.auth)
  const {
    loggedin,
  } = authSlice  
  const {
    darkMode,
  } = appSlice  

  let menuIconColor = `primary`
  if ( darkMode )  {
    menuIconColor = `secondary`
  }

  const handleClick = (e) => {
    console.log ('loggedin', loggedin)
    return false
  }

  return <div className={ clsx ( classes.panel ) }>
            <IconButton
              color={ menuIconColor }
              onClick={ handleClick }
            >

              { loggedin ? <Icon icon={ `loggedin` } color={ menuIconColor } /> 
              : <Icon icon={ `user` } color={ menuIconColor } /> }
              
              

              </IconButton>
          </div>
}
