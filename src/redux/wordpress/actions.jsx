import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const open = createAction(`WORDPRESS/OPEN`) 

export const toggleOpen = open => {
	const store = getStore()
	store.dispatch({type: `WORDPRESS/OPEN`, open })
	return true
}
