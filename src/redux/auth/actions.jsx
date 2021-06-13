import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`AUTH/ERROR`)

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `AUTH/ERROR`, error })
	return false
}
