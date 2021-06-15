import { createAction } from '@reduxjs/toolkit'
import firebase from '@firebase/app'
import parseUa from 'ua-parser-js'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import axios from 'axios'
import { 
    getStore,
} from '../../'

export const error = createAction(`INDIVIDUAL/ERROR`)
export const initting = createAction(`INDIVIDUAL/INITTING`)
export const initted = createAction(`INDIVIDUAL/INITTED`)
export const ting = createAction(`INDIVIDUAL/TING`)
export const id = createAction(`INDIVIDUAL/ID`)
export const individual = createAction(`INDIVIDUAL`)

export const initIndividual = () => {
    const store = getStore()
    store.dispatch({ type: `INDIVIDUAL/INITTING`, initting: true })
    userAgent()
    updateTing(`host`, window.location.host)
    updateTing(`pathname`, window.location.pathname)
    fetchGeo()
    FingerprintJS.load().then(fp => {
          fp.get().then(result => {
              updateTing(`fingerprint`, `${ result.visitorId }` )
              completeInit()
          })
        })
    return true
}

export const updateIndividual = ( attribute, value ) => {
    const store = getStore()
    const { id } = store.getState().individual
    const db = firebase.firestore()
    db.collection(`individuals`).doc( id )
        .set({ [attribute]: value }, { merge: true })
        .then( function(response) {
            return true
        })
        .catch(function(error) {
            throwError( error )
            return false
        })
    return true    
}

export const subscribe = (id) => { 
    const store = getStore()
    const db = firebase.firestore()
    db.collection( `individuals` ).doc( id )
        .onSnapshot( ( doc )  => {
            store.dispatch({type: `INDIVIDUAL`, individual: doc.data() })
        })
    return true
}

export const lookupIndividual = () => { 
    const store = getStore()
    const ting = store.getState().individual.ting
    const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/individuals/`
    axios.post( endpoint, ting )
        .then(function( res ) {
            const store = getStore()
            const id = res.data.response.data.id
            store.dispatch({ type: `INDIVIDUAL/ID`, id })
            subscribe( id )
            return true
        })
        .catch(function( error ) {
            alert ('Dev API not running')
            throwError( error )
            return false
        })
}

export const completeInit = () => {
    const store = getStore()
    store.dispatch({ type: `INDIVIDUAL/INITTED`, initted: true })    
    store.dispatch({ type: `INDIVIDUAL/INITTING`, initting: true })    
    const ting = store.getState().individual.ting
    const {
        fingerprint,
        ip,
        host,
    } = ting
    if ( !fingerprint || !ip || !host) return false
    updateTing(`individual`, `${ host }_${ ip }_${ fingerprint }` )
    lookupIndividual()
    return true
}

export const userAgent = () => {
    const ua = parseUa()
    updateTing(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `desktop` )
    updateTing(`osName`, ua.os.name)
    updateTing(`osVersion`, ua.os.version)
    updateTing(`browserName`, ua.browser.name)
    updateTing(`browserVersion`, ua.browser.version)
    updateTing(`browserMajor`, ua.browser.major)
    completeInit()
    return true
}

export const fetchGeo = () => { 
    const endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_IPGEO}`
    axios.get( endpoint )
        .then( function( response ) {
            const ipgeo = response.data
            updateTing(`callingCode`, ipgeo.calling_code)
            updateTing(`city`, ipgeo.city)
            updateTing(`continentCode`, ipgeo.continent_code)
            updateTing(`continentName`, ipgeo.continent_name)
            updateTing(`countryName`, ipgeo.country_name)
            updateTing(`countryCapital`, ipgeo.country_capital)
            updateTing(`countryCode2`, ipgeo.country_code2)
            updateTing(`countryCode3`, ipgeo.country_code3)
            updateTing(`countryTld`, ipgeo.country_tld)
            updateTing(`currencyCode`, ipgeo.currency ? ipgeo.currency.code : null)
            updateTing(`currencyName`, ipgeo.currency ? ipgeo.currency.name : null)
            updateTing(`currencySymbol`, ipgeo.currency ? ipgeo.currency.symbol : null)
            updateTing(`district`, ipgeo.district)
            updateTing(`geonameId`, ipgeo.geoname_id)
            updateTing(`ip`, ipgeo.ip)
            updateTing(`isEu`, ipgeo.is_eu)
            updateTing(`isp`, ipgeo.isp)
            updateTing(`languages`, ipgeo.languages)
            updateTing(`lat`, ipgeo.latitude)
            updateTing(`lng`, ipgeo.longitude)
            updateTing(`organization`, ipgeo.organization)
            updateTing(`stateProv`, ipgeo.state_prov)
            updateTing(`timeZone`, ipgeo.time_zone ? ipgeo.time_zone.name : null )
            updateTing(`zipcode`, ipgeo.zipcode)
            completeInit()
            return true
        })
        .catch(function( error ) { 
            throwError( error )
            return false
        })
    return true
}

export const updateTing = (key, value) => {
    const store = getStore()
    let ting = store.getState().individual.ting
    ting = {
        ...ting,
        [key]: value,
        updated: Date.now(),
    }
    store.dispatch({type: `INDIVIDUAL/TING`, ting })
    return true
}

export const throwError = error => {
    const store = getStore()
    store.dispatch({type: `INDIVIDUAL/ERROR`, error })
    return false
}

export const getDeviceSrc = individual => {
    const {
        device
    } = individual
    if ( !device ) return false
    if ( device === `desktop` ) return `/svg/listingslab/ironavirus.svg` 
    return `/svg/device/iphone.svg`
}

export const getLocationStr = individual => {
    let fingerprint = individual.individual
    if ( !fingerprint ) return false
    const {
        countryName,
        city,
        district,
    } = individual
    return `${ district }, ${ city !== district ? `${city},` : `` } ${ countryName }`
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

export const getBrowserSrc = individual => {
    const {
        browserName
    } = individual
    if ( !browserName ) return false
    return `/svg/thirdParty/listingslab.svg`
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