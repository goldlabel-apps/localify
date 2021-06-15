import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Typography,
    CardHeader,
    Grid,
} from '@material-ui/core/'
// import { Icon } from '../theme'
import { 
  // getContent,
  getDeviceStr,
  getDeviceSrc,
  getBrowserSrc,
 } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  panel: {
  },
  flex: {
    display: 'flex',
  },
  avatar:{
    background: 'white',
    margin: theme.spacing(),
  },
  padLeft:{
    marginLeft: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
  secColText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Device() {
  
  const classes = useStyles()
  // const [ expanded, setExpanded ] = React.useState( false )
  // const appSlice = useSelector(state => state.app)
  // const {
  //   darkMode,
  // } = appSlice
  // const contentObj = getContent( `device` )
  // const {
  //   content,
  // } = contentObj
  // let helpIconColor = `primary`
  // if ( darkMode ) helpIconColor = `secondary`

  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  const deviceStr = getDeviceStr( individual )
  const deviceSrc = getDeviceSrc( individual )
  const browserSrc = getBrowserSrc( individual )

  return <div className={ classes.panel }>
             <Grid container> 

              <Grid item className={ clsx( classes.none )}>
                  <CardHeader 
                    disableTypography
                    action={ <div className={ clsx( classes.flex )}>
                                <Avatar src={ deviceSrc } className={ clsx( classes.avatar )} />
                                <Avatar src={ browserSrc } className={ clsx( classes.avatar )} />
                              </div>
                            }
                    title={ <Typography variant={ `button` }>
                              { deviceStr }
                            </Typography> }
                  />
              </Grid>
            </Grid>
          </div>
}


/*

*/
