import React from 'react'
import { useSelector } from 'react-redux'

import {
    makeStyles,
    // Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid #ddd',
  },
}))

// lat -14.235004
// lng -51.925282

export default function Mapbox() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )


  return <div className={ classes.main }>
          
              MapGL


        </div>
}
