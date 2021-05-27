import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const open = createAction(`APP/OPEN`) 
export const overlay = createAction(`APP/OVERLAY`) 

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
