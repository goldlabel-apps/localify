import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  dashboard: {
  },
}))

export default function Dashboard() {
  
  const classes = useStyles()
  const pingpongSlice = useSelector(state => state.pingpong)
  const {
    ting,
  } = pingpongSlice


  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>

                <Grid item xs={ 12 } >
                  <Typography>
                  As a visitor, I want to see something really relevant 
                  the first time I clap eyes on the product so that I'm hooked
                  </Typography>

                  <pre>
                    { JSON.stringify( ting, null, 2 ) }
                  </pre>
                  
                </Grid>

                
              </Grid>
          </div>
}

/*

*/