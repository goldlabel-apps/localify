import React, { useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useSelector } from 'react-redux'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX


const mapboxStyle = {
  lightMode: `mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4`,
  darkMode: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`,
}


export default function Mapbox() {
  
  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice

  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice

  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState( 0 )
  const [lat, setLat] = useState( 0 )
  const [zoom, setZoom] = useState( 9 )
  const suppressor = false
  if ( suppressor ) console.log (lat, lng)

  React.useEffect(() => {
    if (map.current) return
    if ( individual ){
      const {
        lat,
        lng,
      } = individual
      // console.log ('FLY TO', lat, lng)
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: darkMode ? mapboxStyle.darkMode : mapboxStyle.lightMode,
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
      setZoom( map.current.getZoom().toFixed( 2 ))
    });
  }); 

  return <div 
            ref={ mapContainer  }
            style={{
              height: 300,
            }}
         />
}
