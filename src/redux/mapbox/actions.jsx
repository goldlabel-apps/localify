import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`MAPBOX/ERROR`)

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `MAPBOX/ERROR`, error })
	return false
}
