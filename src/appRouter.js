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
			type: `home`,
		}
	}

	if ( endpoint === `help` ) {
		return {
			type: `help`,
		}
	}

	if ( endpoint === `trip` ) {
		if ( !action ) {
			return `trips`
		}
		if ( action === `new` ) {
			return { type: `new` }
		}
		if ( action ) {
			return {
				id: action,
				type: `view`
			}
		}
	}
	return { type: `trips` }
}