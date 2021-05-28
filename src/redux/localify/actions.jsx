import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getFStore,
} from '../../'
export const trips = createAction(`LOCALIFY/TRIPS`) 
export const subscribing = createAction(`LOCALIFY/SUBSCRIBING`) 
export const subscribed = createAction(`LOCALIFY/SUBSCRIBED`) 
export const updating = createAction(`LOCALIFY/UPDATING`) 
export const updated = createAction(`LOCALIFY/UPDATED`) 

export const update = ( id, newTrip ) => { 
	
	const store = getStore()
	const db = getFStore() 
	let trip = {
		...newTrip,
		updated: Date.now(),
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

