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
export const newTrip = createAction(`LOCALIFY/NEWTRIP`) 

export const subscribe = () => { 
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SUBSCRIBING`, subscribing: true })
	const db = getFStore()
	db.collection( `trips` ).orderBy( `updated`, `desc` )
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

export const saveNewTrip = () => {
	const store = getStore()
	const db = getFStore() 
	let newTrip = {
		updated: Date.now(),
		...store.getState().localify.newTrip,
	}
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
	db.collection( `trips` ).add( newTrip )
		.then( (doc) => {
			console.log("Document written with ID: ", doc.id)
			store.dispatch({type: `APP/OVERLAY`, overlay: false })
			return true
		})
		.catch((error) => {
    	console.error("Error adding document: ", error)
    	store.dispatch({type: `APP/OVERLAY`, overlay: false })
    	return false
		})
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

export const updateNewTrip = ( key, value ) => {
	const store = getStore()
	let newTripObj = {
		...store.getState().localify.newTrip,
		[key]: value,
	}
	store.dispatch({type: `LOCALIFY/NEWTRIP`, newTrip: newTripObj })
	return true
}

export const selectTrip = ( id, title ) => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SELECTED`, selected: id })
	goTo( `/trip/${id}`, title )
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}


