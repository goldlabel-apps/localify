import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`INDIVIDUAL/ERROR`)

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `INDIVIDUAL/ERROR`, error })
	return false
}
