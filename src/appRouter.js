import { getHistory } from './'

export const appRouter = () => {
	
	const h = getHistory()
	const { pathname } = h.location
	

	let s = pathname.split( `/` )
	let endpoint = s[ 1 ]
	let action = s[ 2 ]
	console.log ( 'endpoint', endpoint )
	console.log ( 'action', action )

	return false
}