import { getHistory } from './'

export const appRouter = () => {	
	const h = getHistory()
	const { pathname } = h.location
	const s = pathname.split( `/` )
	let endpoint = s[ 1 ]
	let action = s[ 2 ]
	// console.log ( 'endpoint', endpoint )
	// console.log ( 'action', action )
	if ( endpoint === `` ) {
		return {
			type: `dashboard`,
		}
	}
	if ( endpoint === `settings` ) {
		return {
			type: `settings`,
		}
	}
	if ( endpoint === `trips` ) {
		return {
			type: `trips`,
		}
	}
	if ( endpoint === `trip` ) {
		if ( !action ) {
			return {
				type: `trips`,
			}
		}
		if ( action === `create` ) {
			return { 
				type: `create`,
			}
		}
		if ( action ) {
			return {
				id: action,
				type: `trip`,
			}
		}
	}
	return { 
		type: `dashboard`,	
	}
}
