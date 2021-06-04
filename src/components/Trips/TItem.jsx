import React from 'react'
import clsx from 'clsx'
import {
  selectTrip,
  deleteTrip,
} from '../../redux/localify/actions'
import {
    makeStyles,
    Avatar,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  trip: {
    // color: theme.palette.primary.main,
    // borderLeft: '1px solid ' + theme.palette.secondary.main,
    // borderBottom: '1px solid ' + theme.palette.secondary.main,
  },
}))

const getFlagPath = countryCode => {
  return `/svg/flags/${ countryCode }.svg`
}


export default function TItem( props ) {
  
  const { trip, isSelected } = props
  const classes = useStyles()
  const {
    id,
    title,
    countryCode,
  } = trip

  return <ListItem
            button 
            disabled={ isSelected }
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
                secondary={ id }
              />

              <ListItemSecondaryAction>

                <IconButton 
                  edge={ `end` } 
                  aria-label={ `delete` }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    const confirmed = window.confirm( `Really, really?` )
                    if ( confirmed ) deleteTrip ( id )
                  }}>
                  <Icon icon={ `delete`} color={ `secondary` } />
                </IconButton>

              </ListItemSecondaryAction>

        </ListItem>
}

/*

<IconButton 
                  edge={ `end` } 
                  aria-label={ `edit` }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    // console.log ('editTrip', id)
                    // editTrip ( id )
                  }}>
                  <Icon icon={ `edit`} color={ `secondary` } />
                </IconButton>

*/