import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
import {
  getTripById,
} from '../../redux/localify/actions'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  view: {
    border: '1px solid yellow',
  },
}))

export default function TView() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    selected,
  } = localifySlice
  const trip = getTripById()
  if ( !selected || !trip ) return null
  
  return <div className={ clsx ( classes.view ) }>
            <pre>
              { JSON.stringify( trip, null, 2 ) }
            </pre>
        </div>
}
