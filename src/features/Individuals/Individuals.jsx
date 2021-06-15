import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  panel: {
  },
  flex: {
    display: 'flex',
  },
}))

export default function Individuals() {
  
  const classes = useStyles()
  const authSlice = useSelector(state => state.auth) 
  const individualSlice = useSelector(state => state.individual) 
  const {
    authed,
  } = authSlice
  if ( !authed ) return null
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  return <div className={ clsx( classes.panel, classes.flex ) }>
             Individuals
          </div>
}
