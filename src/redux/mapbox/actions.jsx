import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`MAPBOX/ERROR`)
export const mapboxStyleId = createAction(`MAPBOX/STYLE/ID`)
export const updateNeeded = createAction(`MAPBOX/UPDATE`)

export const toggleUpdate = updateNeeded => {
	const store = getStore()
	store.dispatch({type: `MAPBOX/UPDATE`, updateNeeded })
	return true
}

export const getMapboxUrl = mapboxStyleId => {
	const styles = getStore().getState().mapbox.mapboxStyles
	for ( let i = 0; i < styles.length; i ++ ){
		if ( styles[ i ].id ===  mapboxStyleId) {
			return styles[ i ].url
		}
	}
	return false
}

export const changeMapboxStyle = mapboxStyleId => {
	const store = getStore()
	toggleUpdate( true )
	store.dispatch({type: `MAPBOX/STYLE/ID`, mapboxStyleId })
	return false
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `MAPBOX/ERROR`, error })
	return false
}
