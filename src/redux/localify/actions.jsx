import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getFStore,
} from '../../'
import {
  goTo,
} from '../app/actions'

export const trips = createAction(`LOCALIFY/TRIPS`) 
export const subscribing = createAction(`LOCALIFY/SUBSCRIBING`) 
export const subscribed = createAction(`LOCALIFY/SUBSCRIBED`) 
export const updating = createAction(`LOCALIFY/UPDATING`) 
export const updated = createAction(`LOCALIFY/UPDATED`) 
export const selected = createAction(`LOCALIFY/SELECTED`) 

export const newTrip = ( ) => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SELECTED`, selected: null })
	goTo( `/trip/new`, `New trip` )
	return true
}

export const selectTrip = ( id, title ) => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SELECTED`, selected: id })
	goTo( `/trip/${id}`, title )
	return true
}

export const updateTrip = ( id, updatedTrip ) => { 
	
	const store = getStore()
	const db = getFStore() 
	let trip = {
		updated: Date.now(),
		...updatedTrip,
	}
	store.dispatch({type: `APP/OVERLAY`, overlay: true })

	db.collection( `trips` ).doc( id ).set(trip, { merge: true })
		.then((doc) => {
			store.dispatch({type: `APP/OVERLAY`, overlay: false })
			return true
		})
		.catch((error) => {
			console.log ( 'error', error )
			store.dispatch({type: `APP/OVERLAY`, overlay: false })
			return false
		})
	return true
}


export const subscribe = () => { 
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SUBSCRIBING`, subscribing: true })
	const db = getFStore()
	db.collection( `trips` )
		.onSnapshot(( snap ) => {
			const trips = []
	        snap.forEach( doc => {
	            trips.push({
	            	id: doc.id,
	            	...doc.data(),
	            })
	        })
	        store.dispatch( {type: `LOCALIFY/TRIPS`, trips } )
	        store.dispatch( {type: `LOCALIFY/SUBSCRIBED`, subscribed: true } )
		})
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}


