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
        // continentName,
    } = individual
    return `${ district }, ${ city !== district ? `${city},` : `` } ${ countryName }`
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