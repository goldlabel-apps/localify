import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const trips = createAction(`LOCALIFY/TRIPS`) 
export const subscribing = createAction(`LOCALIFY/SUBSCRIBING`) 
export const subscribed = createAction(`LOCALIFY/SUBSCRIBED`) 

export const subscribe = () => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SUBSCRIBING`, subscribing: true })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}


