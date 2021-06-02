import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  newTrip: {
    color: theme.palette.primary.main,
  },
}))

export default function NewTrip() {
  
  const classes = useStyles()

  return <div className={ clsx ( classes.newTrip ) }>
              <Typography variant={ `button` } >
                New Trip
              </Typography>
          </div>
}


