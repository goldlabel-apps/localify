import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
    Card,
    CardHeader,
} from '@material-ui/core/' 
import {
  Help,
} from '../'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  newTrip: {
    padding: theme.spacing(),
  },
  title:{
    fontWeight: 'lighter',
  },
}))

export default function TripNew() {
  
  const classes = useStyles()

  return <Card className={ clsx ( classes.newTrip ) }>

              <Grid container>
                  
                  <Grid item xs={ 12 } md={ 8 } >
                    <CardHeader 
                      title={ `New Trip` }
                      subheader={ `step 1 of 3` }
                      avatar={ <Icon icon={ `new` } color={ `secondary` } /> }
                    />
                  </Grid>
                  
                  <Grid item xs={ 12 } md={ 4 } >
                    <Help options={{ pag2: 123}} />
                  </Grid>

                </Grid>

          </Card>
}


