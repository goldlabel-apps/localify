import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

import {
    makeStyles,
    Typography,
    Grid,
    CardHeader,
    Avatar,
} from '@material-ui/core/'
import { 
  getLocationStr,
  getFlagSrc,
 } from '../redux/app/actions'

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
  const flagSrc = getFlagSrc ( individual )

  return <div className={ clsx( classes.panel ) }>
            <Grid container>

              <Grid item className={ clsx( classes.grow )}>
                <CardHeader 
                      disableTypography
                      avatar={ <Avatar src={ flagSrc } className={ clsx( classes.avatar )} /> }
                      title={ <Typography variant={ `h6` }>
                              { locationStr }
                            </Typography> }
                />
              </Grid>
            </Grid>          
      </div>
}

/*
                <Typography variant={ `button` } className={ classes.padLeft }>
                  { title }
                </Typography> 
*/