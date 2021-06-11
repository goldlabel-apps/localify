import React from 'react'
import { useSelector } from 'react-redux'
import MapGL from 'react-map-gl'

import {
    makeStyles,
    // Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid #ddd',
  },
}))

// lat -14.235004
// lng -51.925282

export default function Mapbox() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )

  const [viewport, setViewport] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  })

  return <div className={ classes.main }>
          
              <MapGL
                {...viewport}
                width="100%"
                height={400}
                mapStyle={ process.env.REACT_APP_MAPBOX_STYLE }
                onViewportChange={ nextViewport => setViewport( nextViewport ) }
                mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX }
              />


        </div>
}
