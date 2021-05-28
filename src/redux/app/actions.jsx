import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getHistory,
} from '../../'
export const open = createAction(`APP/OPEN`) 
export const overlay = createAction(`APP/OVERLAY`) 
export const path = createAction(`APP/PATH`) 

export const goTo = path => {
	const history = getHistory()
	// const { location } = history
	history.push( path )
	const store = getStore()
	store.dispatch({type: `APP/PATH`, path })
	return true
}

export const navigateTo = ( url, target ) => {
	window.open( url, target )
	if ( target === `_self`){
		toggleOverlay( true )
	}
	return true
}

export const toggleOpen = open => {
	const store = getStore()
	store.dispatch({type: `APP/OPEN`, open })
	return true
}

export const toggleOverlay = overlay => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay })
	return true
}
