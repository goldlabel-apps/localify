import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { 
	getStore,
	getHistory,
} from '../../'

export const error = createAction(`APP/ERROR`) 
export const overlay = createAction(`APP/OVERLAY`)
export const darkMode = createAction(`APP/DARKMODE`)
export const config = createAction(`APP/CONFIG`)
export const configLoading = createAction(`APP/CONFIG/LOADING`)
export const configLoaded = createAction(`APP/CONFIG/LOADED`)
export const path = createAction(`APP/PATH`)

export const getContent = slug => {
	const pages = getStore().getState().app.config.pages
	for ( let i = 0; i < pages.length; i ++ ){
		if (pages[ i ].slug === slug ){
			return pages[i]
		}
	}
	return null
}

export const loadConfig = () => {
	const store = getStore()
	store.dispatch({type: `APP/CONFIG/LOADING`, configLoading: true })
	const configPath = `/config.json`
	axios.get( configPath )
		.then( function( res ) {
			store.dispatch({type: `APP/CONFIG`, config: res.data })
			store.dispatch({type: `APP/CONFIG/LOADING`, configLoading: false })
			store.dispatch({type: `APP/CONFIG/LOADED`, configLoaded: true })
			return true
		})
		.catch( function( error ) {
			throwError( error )
			store.dispatch({type: `APP/CONFIG/LOADING`, configLoading: false })
			store.dispatch({type: `APP/CONFIG/LOADED`, configLoaded: true })
			return false
		})
	return true
}

export const navigateTo = ( url, target ) => {
	window.open( url, target )
	if ( target === `_self`){
		toggleOverlay( true )
	}
	return true
}

export const setPath = path => {
	const store = getStore()
	store.dispatch({type: `APP/PATH`, path })
	return true
}

export const routeTo = path => {
	const store = getStore()
	store.dispatch({type: `APP/PATH`, path })
	const history = getHistory()
	history.push( path )
	return true
}

export const toggleDarkMode = darkMode => {
	const store = getStore()
	store.dispatch({type: `APP/DARKMODE`, darkMode })
	return true
}

export const toggleOverlay = overlay => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}

