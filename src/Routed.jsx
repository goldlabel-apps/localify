import React from 'react'
// import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
const useStyles = makeStyles((theme) => ({
  routed: {
    // border: '1px solid red',
  },
}))

export default function Routed() {

  const classes = useStyles()

  return <div className={ clsx( classes.routed ) } >
              <Grid container>
                <Grid item xs={ 12 } >
                  Routed
                </Grid>
              </Grid>
          </div>
}