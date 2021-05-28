import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core/'
import {
  Trip,
} from './'

const useStyles = makeStyles((theme) => ({
  main: {
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


  return <div className={ clsx( classes.main ) }>

          <Grid container>
            <Grid item xs={ 12 }>
              <Typography 
                variant={ `body1` }
                className={ clsx( classes.lighter, classes.padded ) }>
                Showing { trips.length } trips
              </Typography>
            </Grid>
            { trips.map ( (item, i) => {
                return <Trip trip={ item } key={ `trip_${i}` } />
            })}
          </Grid>
          
        </div>
}

