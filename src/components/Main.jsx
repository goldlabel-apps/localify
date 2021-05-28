import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import {
  CardKML,
} from './'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
  },
  item:{
    border: '1px solid orange',
  }
}))

export default function Main() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )

  return <div className={ clsx( classes.main ) }>
          <Grid container>
            
            <Grid item xs={ 12 }>
              <CardKML />
            </Grid>

          </Grid>
          
        </div>
}
