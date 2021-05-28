import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const error = createAction(`APP/ERROR`) 


export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error })
	return false
}
