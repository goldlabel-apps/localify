import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`LOCALIFY/ERROR`)

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `LOCALIFY/ERROR`, error })
	return false
}
