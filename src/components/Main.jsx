import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Backdrop,
    CircularProgress,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid red',
  },
}))

export default function Main() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice

  return <div className={ classes.main }>
            <CircularProgress color={ `inherit` } />
        </div>
}
