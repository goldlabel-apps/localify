import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getHistory,
} from '../../'

export const overlay = createAction(`APP/OVERLAY`) 
export const path = createAction(`APP/PATH`) 
export const darkMode = createAction(`APP/DARKMODE`) 
export const rightMenuOpen = createAction(`APP/RIGHTMENUOPEN`) 

export const goToRoute = route => {
	console.log ( 'goToRoute', route )
	// const history = getHistory()
	// history.push( path )
	// const store = getStore()
	// store.dispatch({type: `APP/PATH`, path })
	return true
}

export const goTo = path => {
	console.log ( 'goTo', path )
	const history = getHistory()
	history.push( path )
	const store = getStore()
	store.dispatch({type: `APP/PATH`, path })
	return true
}

export const toggleRightMenuOpen = rightMenuOpen => {
	const store = getStore()
	store.dispatch({type: `APP/RIGHTMENUOPEN`, rightMenuOpen })
	return true
}

export const toggleDarkMode = darkMode => {
	const store = getStore()
	store.dispatch({type: `APP/DARKMODE`, darkMode })
	return true
}



export const navigateTo = ( url, target ) => {
	window.open( url, target )
	if ( target === `_self`){
		toggleOverlay( true )
	}
	return true
}

export const toggleOverlay = overlay => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay })
	return true
}
