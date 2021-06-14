import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { signout } from '../redux/auth/actions'
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
    authed,
  } = authSlice  
  const {
    darkMode,
  } = appSlice  
  let menuIconColor = `primary`
  if ( darkMode )  {
    menuIconColor = `secondary`
  }

  if (authed){
    return <div className={ clsx ( classes.panel ) }>
                <IconButton
                  color={ menuIconColor }
                  onClick={ (e) => {
                    e.preventDefault()
                    if (window.confirm( 'really really logout?')) signout()
                  }}>
                  <Icon icon={ `logout` } color={ menuIconColor } />
                 </IconButton>
            </div>
  }

  if (!authStateChanged) return null

  return <div className={ clsx ( classes.panel ) }>
            <IconButton
              color={ menuIconColor }
              onClick={ (e) => {
                    e.preventDefault()
                    setShowForm( true ) 
              }}>
              <Icon icon={ `loggedin` } color={ menuIconColor } />
            </IconButton>
            { showForm ? <AuthForm setShowForm={ setShowForm } /> : null }
          </div>
}
