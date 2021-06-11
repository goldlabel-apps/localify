import React from 'react'
import { useSelector } from 'react-redux'

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
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )


  // const docsifySlice = useSelector(state => state.docsify)
  // React.useEffect(() => {
  //   const {
  //     configLoading,
  //     configLoaded,
  //   } = docsifySlice
  //   if (!configLoading && !configLoaded) initDocsfify()
  // }, [docsifySlice])

  return <div className={ classes.individual }>
              Individual
          </div>
}
