import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'
import { 
  getLocationStr,
 } from '../features/Individual/actions'

const useStyles = makeStyles((theme) => ({
  panel: {
  },
  avatar:{
    background: 'white',
    margin: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
  padLeft:{
    marginLeft: theme.spacing(),
  },
  secColText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Location() {
  
  const classes = useStyles()
  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  const locationStr = getLocationStr( individual )
  // const flagSrc = getFlagSrc ( individual )

  return <div className={ clsx( classes.panel ) }>
            <Typography variant={ `body1` }>
              { locationStr }
            </Typography>        
          </div>
}

/*
                <Typography variant={ `button` } className={ classes.padLeft }>
                  { title }
                </Typography> 
avatar={ <Avatar src={ flagSrc } className={ clsx( classes.avatar )} /> }
*/