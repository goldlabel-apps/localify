import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
} from '@material-ui/core/'
// import { Icon } from '../theme'
import { 
  getBrowserSrc,
  getFlagSrc,
  getDeviceSrc,
 } from '../features/Individuals/actions'

const useStyles = makeStyles((theme) => ({
  panel: {
  },
  flex: {
    display: 'flex',
  },
  avatar:{
    // background: theme.palette.secondary.main,
    // border: '1px solid ' + theme.palette.primary.main,
    margin: theme.spacing(),
  },
}))

export default function Avatars() {
  
  const classes = useStyles()

  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  const deviceSrc = getDeviceSrc( individual )
  const browserSrc = getBrowserSrc( individual ) 
  const flagSrc = getFlagSrc ( individual )

  return <div className={ clsx( classes.panel, classes.flex ) }>
             <Avatar src={ flagSrc } className={ clsx( classes.avatar )} />
             <Avatar src={ deviceSrc } className={ clsx( classes.avatar )} />
             <Avatar src={ browserSrc } className={ clsx( classes.avatar )} />
          </div>
}
