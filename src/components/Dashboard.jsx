import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { 
  Trips,
  NewTrip,
} from './Trips'

const useStyles = makeStyles((theme) => ({
  home: {
  },
  padded:{
    // padding: theme.spacing(),
  }
}))

export default function Dashboard() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>
                <Grid item xs={ 12 } md={ 6 } className={ clsx( classes.padded ) } >
                  <Trips />
                </Grid>
                <Grid item xs={ 12 } md={ 6 } className={ clsx( classes.padded ) }>
                 <NewTrip />
                </Grid>
              </Grid>
          </div>
}
