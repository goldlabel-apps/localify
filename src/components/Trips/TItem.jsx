import React from 'react'
import clsx from 'clsx'
import {
  selectTrip,
} from '../../redux/localify/actions'
import {
    makeStyles,
    Avatar,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  trip: {
    color: theme.palette.primary.main,
    // borderLeft: '1px solid ' + theme.palette.secondary.main,
    borderBottom: '1px solid ' + theme.palette.secondary.main,
  },
}))

const getFlagPath = countryCode => {
  return `/svg/flags/${ countryCode }.svg`
}


export default function TItem( props ) {
  
  const { trip } = props
  const classes = useStyles()
  const {
    id,
    title,
    countryCode,
  } = trip

  return <ListItem
            button 
            className={ clsx ( classes.trip ) }
            onClick={ (e) => {
              e.preventDefault()

              selectTrip ( id, title )
            }}>
            { countryCode ? <ListItemIcon>
                <Avatar src={ getFlagPath( countryCode )}/>
              </ListItemIcon> : null }
              
              <ListItemText 
                primary={ title } 
                secondary={ countryCode }
              />
        </ListItem>
}
/*

*/