import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'

// import {
//   toggleDarkMode,
// } from '../redux/app/actions'


const useStyles = makeStyles((theme) => ({
  topRightMenu: {
    // border: '1px solid orange',
  },
}))

export default function TopRightMenu() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice
  let menuIconColor = `primary`
  if ( darkMode )  {
    menuIconColor = `secondary`
  }


  return <div className={ clsx( classes.topRightMenu )}>
            <IconButton
              checked={ darkMode }
              color={ menuIconColor }
              onClick={ (e) => {
                e.preventDefault()
                // toggleDarkMode( !darkMode )
              }}>
                <Icon icon={ `menu`} />
              </IconButton>
          </div>
}
