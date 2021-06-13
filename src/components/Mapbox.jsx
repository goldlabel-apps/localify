import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import mapboxgl from 'mapbox-gl'
import './mapbox-gl.css'

const useStyles = makeStyles(theme => ({
    map: {
        height: 275,
    }
}));

export default function Mapbox() {
    const classes = useStyles()
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: process.env.REACT_APP_MAPBOX_STYLE,
                center: [153.107658, -27.211579],
                zoom: 11
            });
            map.on(`load`, (e) => {
                setMap(map);
                map.resize();
                // map.addControl(new mapboxgl.NavigationControl());
            });
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])

    return <div
                className={classes.map}
                ref={el => (mapContainer.current = el)}
            />
    
}
