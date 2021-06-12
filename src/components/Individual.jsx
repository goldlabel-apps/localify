import React from 'react'
import { useSelector } from 'react-redux'
import { initIndividual } from '../redux/individual/actions'
import {
    makeStyles,
    // Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  individual: {
    // border: '1px solid #ddd',
  },
}))

export default function Individual() {
  
  const classes = useStyles()
  const individualSlice = useSelector( state => state.individual ) 

  React.useEffect(() => {
    const {
      initted,
      initting,
    } = individualSlice
    if (!initted && !initting) initIndividual()
  }, [ individualSlice ]) 

  const {
    id,
    individual,
  } = individualSlice
  if ( !id ) return null
  
  return <div className={ classes.individual }>
              <pre>
                { JSON.stringify( individual, null, 2 ) }
              </pre>
          </div>
}
