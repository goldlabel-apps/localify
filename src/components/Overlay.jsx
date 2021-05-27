import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Backdrop,
    CircularProgress,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1234567,
    color: '#fff',
  },
}))

export default function Overlay() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    overlay,
  } = appSlice
  if ( !overlay ) return null

  return (
    <Backdrop 
        className={ classes.backdrop } 
        open={ overlay }>
        <CircularProgress color={ `inherit` } />
    </Backdrop>
  )
}
