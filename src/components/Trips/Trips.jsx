import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Grid,
    Typography,
    List,
} from '@material-ui/core/'
import {
  TripListItem,
} from './'

const useStyles = makeStyles((theme) => ({
  trips: {
    display: 'flex',
  },
  item:{
    border: '1px solid orange',
  },
  lighter:{
    fontWeight: 'lighter',
  },
  padded:{
    padding: theme.spacing(),
  }
}))

export default function Trips() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    trips,
  } = localifySlice


  return <div className={ clsx( classes.trips ) }>

          <Grid container>

            <Grid item xs={ 12 }>
              <Typography variant={ `h2` }  className={ classes.lighter }>
                Trips
              </Typography>
            </Grid>

            <Grid item xs={ 12 }>
              <List dense>
                { trips.map ( (item, i) => {
                    return <TripListItem trip={ item } key={ `trip_${ i }` } />
                })}
              </List>
            </Grid>

            <Grid item xs={ 12 }>
              <Typography 
                variant={ `body2` }
                className={ clsx( classes.lighter, classes.padded ) }>
                Showing all { trips.length } trips
              </Typography>
            </Grid>

          </Grid>
          
        </div>
}

