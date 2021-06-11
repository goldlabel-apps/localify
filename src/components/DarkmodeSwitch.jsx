import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Switch,
} from '@material-ui/core/'
import {
  toggleDarkMode,
} from '../redux/app/actions'


const useStyles = makeStyles((theme) => ({
  darkmodeSwitch: {
    // border: '1px solid orange',
  },
}))

export default function DarkmodeSwitch() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice

  return <div className={ clsx( classes.darkmodeSwitch )}>
            <Switch
              checked={ darkMode }
              color={ `secondary` }
              onClick={ (e) => {
                e.preventDefault()
                toggleDarkMode( !darkMode )
              }}/>
          </div>
}
