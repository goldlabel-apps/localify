import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  viewTrip: {
    margin: theme.spacing(),
  },
}))

export default function TripView() {
  
  const classes = useStyles()


  return <div className={ clsx ( classes.viewTrip ) }>
            TripView
        </div>
}


