import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { 
  Navigation,
} from './'

const useStyles = makeStyles((theme) => ({
  dashboard: {
  },
}))

export default function Dashboard() {
  
  let showJSON = false

  const classes = useStyles()
  const docsifySlice = useSelector(state => state.docsify)
  const {
    config,
  } = docsifySlice
  if ( !config ) return null
  // const {
  //   title,
  // } = config

  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>

                <Grid item xs={ 12 } >

                  <Navigation />

                  { showJSON ? <pre>
                    { JSON.stringify( config, null, 2 ) }
                  </pre> : null }
                  
                </Grid>

                
              </Grid>
          </div>
}

/*

*/