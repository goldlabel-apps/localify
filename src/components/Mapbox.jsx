import React, { useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
import 'mapbox-gl/dist/mapbox-gl.css'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    FormControl,
    InputLabel,
    Select,
} from '@material-ui/core/'
import { 
  changeMapboxStyle,
  getMapboxUrl,
  toggleUpdate,
} from '../redux/mapbox/actions'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

const useStyles = makeStyles((theme) => ({
  panel: {
  },
  map:{
    height: 400,
  },
  formControl:{
    marginTop: theme.spacing(),
  }
}))

export default function Mapbox() {
  
  const classes = useStyles()
  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  const mapboxSlice = useSelector(state => state.mapbox) 
  const {
    mapboxStyles,
    mapboxStyleId,
  } = mapboxSlice
  const mapboxStyleUrl = getMapboxUrl(mapboxStyleId)
  const mapContainer = useRef( null )
  const map = useRef(null)
  const [lng, setLng] = useState( 0 )
  const [lat, setLat] = useState( 0 )
  const [zoom, setZoom] = useState( 5 )
  const suppressor = false
  if ( suppressor ) console.log (lat, lng)

  React.useEffect(() => {
    const {
      updateNeeded
    } = mapboxSlice
    if ( updateNeeded ){
      toggleUpdate( false )
    }
  }, [ mapboxSlice ])

  React.useEffect(() => {
    if (map.current) return
    if ( individual ){
      const {
        lat,
        lng,
      } = individual
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapboxStyleUrl,
        center: [lng, lat],
        zoom: zoom
      })
    }
  })

  React.useEffect(() => {
    if ( !map.current ) return
    map.current.on('move', () => {
      setLng( map.current.getCenter().lng.toFixed( 4 ))
      setLat( map.current.getCenter().lat.toFixed( 4 ))
      setZoom( map.current.getZoom().toFixed( 4 ))
    })
  })
  if ( !individual ) return null


  const showSelecta = false

  return <div className={ classes.panel }>
            {  }
            <div 
              ref={ mapContainer  }
              className={ classes.map }
              style={{
              }}
            />
            
            { showSelecta ? <FormControl className={classes.formControl}>
              <InputLabel htmlFor="mapStyle">
                Mapbox style
              </InputLabel>
              <Select
                native
                value={ mapboxStyleId }
                onChange={ ( e ) => {  
                  e.preventDefault()
                  changeMapboxStyle( e.target.value )
                }}
                inputProps={{
                  name: 'mapStyle',
                  id: 'mapStyle',
                }}>
                { mapboxStyles.map( (item, i) => {
                  const {
                    id,
                    name,
                    // url,
                  } = item
                  return <option 
                          value={ id }
                          key={`mapStyle_${ i }`}>
                          { name }
                         </option>
                })}
              </Select>
            </FormControl> : null }            
          </div>
}
