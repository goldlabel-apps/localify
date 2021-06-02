import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    List,
} from '@material-ui/core/'
import {
  TripListItem,
} from './'

const useStyles = makeStyles((theme) => ({
  trips: {
    color: theme.palette.primary.main,
  },
  lighter:{
    // fontWeight: 'lighter',
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

 
              <Typography variant={ `button` } >
                Trips
              </Typography>

              <List dense>
                { trips.map ( (item, i) => {
                    return <TripListItem trip={ item } key={ `trip_${ i }` } />
                })}
              </List>

              <Typography 
                variant={ `body2` }
                className={ clsx( classes.lighter, classes.padded ) }>
                Showing all { trips.length } trips
              </Typography>
          
        </div>
}

