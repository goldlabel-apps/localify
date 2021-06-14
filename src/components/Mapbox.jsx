import React, { useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX



export default function Mapbox() {
  
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  React.useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      center: [lng, lat],
      zoom: zoom
    })
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
