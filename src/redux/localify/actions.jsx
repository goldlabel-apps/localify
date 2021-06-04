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
export const selected = createAction(`LOCALIFY/SELECTED`) 
export const newTrip = createAction(`LOCALIFY/NEWTRIP`) 
export const selectedFirst = createAction(`LOCALIFY/SELECTED/FIRST`) 
export const createOpen = createAction(`LOCALIFY/CREATE/OPEN`) 

export const toggleCreateOpen = createOpen => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/CREATE/OPEN`, createOpen })
	return true
}

export const selectTrip = ( id, title ) => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/SELECTED`, selected: id })
	return true
}

export const getTripById = () => {
	const store = getStore()
	const selected = store.getState().localify.selected
	const trips = store.getState().localify.trips
	if ( !trips.length ) return null
	for (let i = 0; i < trips.length ; i ++){
		if ( trips[i].id === selected ){
			return trips[i]
		}
	}
	return null
}


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
	    
	    const selectedFirst = store.getState().localify.selectedFirst
	    

	    if ( !selectedFirst ){
	    	if (trips.length){
	    		// console.log ( 'selectedFirst', selectedFirst, trips[0].id )
	    		store.dispatch({type: `LOCALIFY/SELECTED`, selected: trips[0].id })
	    		store.dispatch({type: `LOCALIFY/SELECTED/FIRST`, selectedFirst: true })
	    	}
	    	
	    }
		})
}


export const deleteTrip = id => {
	const store = getStore()
	const db = getFStore() 
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
	db.collection( `trips` ).doc( id ).delete()
		.then( () => {
			store.dispatch({type: `APP/OVERLAY`, overlay: false })
			return true
		})
		.catch((error) => {
    	console.error("Error deleting document: ", error)
    	store.dispatch({type: `APP/OVERLAY`, overlay: false })
    	return false
		})
	return true
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
			store.dispatch({type: `LOCALIFY/CREATE/OPEN`, createOpen: false })
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

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}


