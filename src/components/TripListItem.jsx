import React from 'react'
import clsx from 'clsx'
import {
  selectTrip,
} from '../redux/localify/actions'
import {
    makeStyles,
    Avatar,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  trip: {
  },
}))


const getFlagPath = ( countryCode ) => {
  // console.log ( 'getFlagPath', countryCode )
  return `/svg/flags/${ countryCode }.svg`
}


export default function TripListItem( props ) {
  
  const { trip } = props
  const classes = useStyles()
  const {
    id,
    title,
    description,
    countryCode,
  } = trip
  if ( !title ) return null

  return <ListItem
            button 
            className={ clsx ( classes.trip ) }
            onClick={ (e) => {
              e.preventDefault()
              selectTrip ( id )
            }}>
              <ListItemIcon>
                <Avatar src={ getFlagPath( countryCode )}/>
              </ListItemIcon>
              <ListItemText 
                primary={ title } 
                secondary={ description }
              />
        </ListItem>
}
