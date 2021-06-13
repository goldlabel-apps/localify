import { createAction } from '@reduxjs/toolkit'
import firebase from '@firebase/app'
import '@firebase/auth'
import { 
	getStore,
} from '../../'

export const error = createAction(`AUTH/ERROR`)
export const authStateChanged = createAction(`AUTH/AUTHSTATECHANGED`)
export const authed = createAction(`AUTH/AUTHED`)
export const isAuthing = createAction(`AUTH/AUTHING`)

export const changeAuth = user => {
	console.log ('changeAuth', user.email)
	const store = getStore()
	store.dispatch({ type: `AUTH/AUTHSTATECHANGED`, authStateChanged: true })
	if (user){
		if (user.email === `listingslab@gmail.com`){
		}
		store.dispatch({ type: `AUTH/AUTHED`, authed: true })
	} else {
		store.dispatch({ type: `AUTH/AUTHED`, authed: false })
	}
}

export const signin = creds => {
	const store = getStore()
	store.dispatch({type: `AUTH/AUTHING`, isAuthing: true })
	const { email, password } = creds
	firebase.auth()
		.signInWithEmailAndPassword( email, password)
		.then(function(result) {
			store.dispatch({type: `AUTH/AUTHING`, isAuthing: false })
		})
		.catch(function(error) {
			store.dispatch({type: `AUTH/AUTHING`, isAuthing: false })
		})
}

export const signout = () => {
	const store = getStore()
	store.dispatch({ type: `AUTH/AUTHING`, isAuthing: true })
	firebase.auth().signOut()
		.then( function( result ) {
			store.dispatch({type: `AUTH/AUTHING`, isAuthing: false })
			store.dispatch({ type: `AUTH/AUTHED`, authed: false })
		})
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `AUTH/ERROR`, error })
	return false
}
