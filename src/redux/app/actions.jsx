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

export const routeTo = route => {
	console.log ( 'routeTo', route )
	const history = getHistory()
	history.push( route )
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


export const getLocationStr = individual => {
	let fingerprint = individual.individual
	if ( !fingerprint ) return false
    const {
        countryName,
        city,
        district,
        // continentName,
    } = individual
    return `${ district }, ${ city }, ${ countryName }`
    // ${ continentName }
}

export const getFlagSrc = individual => {
	const {
		countryCode2
	} = individual
	if ( !countryCode2 ) return false
    return `/svg/flags/${ countryCode2.toLowerCase() }.svg`
}

export const getDeviceStr = individual => { 
    if ( !individual ) return false
    const {
        osName,
        device,
        browserName,
        browserMajor,
    } = individual
    let deviceStr = `${ osName } ${browserName} ${browserMajor} ${ device }`
    return deviceStr
}


export const getDeviceSrc = individual => {
    // const {
    //     countryCode2
    // } = individual
    // if ( !countryCode2 ) return false
    return `/svg/device/iphone.svg`
}

export const getBrowserSrc = individual => {
    // const {
    //     countryCode2
    // } = individual
    // if ( !countryCode2 ) return false
    return `/svg/browsers/chrome.svg`
}

/*

const example = {
    "id": "sI6js3jOFEH55Qgq9mvM",
    "ip": "111.206.221.69",
    "lng": "103.93094",
    "countryTld": ".cn",
    "browserName": "Mobile Safari",
    "stateProv": "",
    "osVersion": "9.1",
    "callingCode": "+86",
    "currencyCode": "CNY",
    "browserVersion": "9.0",
    "currencyName": "Yuan Renminbi",
    "lat": "36.56754",
    "created": 1617170332062,
    "host": "listingslab.com",
    "district": "",
    "path": "/big-data-freedom-and-you/",
    "countryCode2": "CN",
    "device": "Apple iPhone",
    "osName": "iOS",
    "organization": "China Unicom Beijing Province Network",
    "zipcode": "",
    "continentName": "Asia",
    "timeZone": "Asia/Shanghai",
    "city": "China",
    "geonameId": "10680273",
    "countryCapital": "Beijing",
    "individual": "listingslab.com_60c1918583d73818dffeeafd29b9a802",
    "isEu": false,
    "languages": "zh-CN,yue,wuu,dta,ug,za",
    "continentCode": "AS",
    "currencySymbol": "¥",
    "countryName": "China",
    "updated": 1617170327425,
    "countryCode3": "CHN",
    "browserMajor": "9",
    "isp": "China Unicom Beijing Province Network"
}

*/