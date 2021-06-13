import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { AuthForm } from './'

const useStyles = makeStyles((theme) => ({
  panel: {
    margin: theme.spacing(),
  },
}))

export default function Auth() {
  
  const classes = useStyles()
  const [showForm, setShowForm] = React.useState( false ) 

  const appSlice = useSelector(state => state.app)
  const authSlice = useSelector(state => state.auth)
  const {
    authStateChanged,
    loggedin,
    authed,
  } = authSlice  
  const {
    darkMode,
  } = appSlice  

  let menuIconColor = `primary`
  if ( darkMode )  {
    menuIconColor = `secondary`
  }  

  if ( !authStateChanged ) return null

  const handleClick = (e) => {
    setShowForm( true ) 
    return true
  }

  if (authed){
    return <div className={ clsx ( classes.panel ) }>
                hello admin
            </div>
  }

  return <div className={ clsx ( classes.panel ) }>
            <IconButton
              color={ menuIconColor }
              onClick={ handleClick } >
              { loggedin ? <Icon icon={ `loggedin` } color={ menuIconColor } /> 
              : <Icon icon={ `user` } color={ menuIconColor } /> }
              </IconButton>
              { showForm ? <AuthForm /> : null }
          </div>
}
