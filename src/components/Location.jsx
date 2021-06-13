import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Collapse,
    IconButton,
    Grid,
    CardHeader,
    CardContent,
    Avatar,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { 
  getContent, 
  getLocationStr,
  getFlagSrc,
 } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  panel: {
     margin: theme.spacing(),
  },
  flag:{
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
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice
  const [ expanded, setExpanded ] = React.useState( false )
  let helpIconColor = `primary`
  if ( darkMode ) helpIconColor = `secondary`
  const contentObj = getContent( `location` )
  const {
    title,
    content,
  } = contentObj

  
  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  const {
    ip,
  } = individual

  const locationStr = getLocationStr( individual )
  const flagSrc = getFlagSrc ( individual )
  return <div className={ clsx( classes.panel ) }>
            <Grid container>

              <Grid item>

              <CardHeader 
                    disableTypography
                    avatar={ <Avatar src={ flagSrc } /> }
                    title={ <Typography>IP { ip }</Typography> }
                    subheader={ <Typography>{ locationStr }</Typography> }
                  />


                <IconButton
                  color={ helpIconColor }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    setExpanded( !expanded )
                  }}>
                  <Icon icon={`help`} color={ helpIconColor } />
                </IconButton>

                <Typography variant={ `button` } className={ classes.padLeft }>
                  { title }
                </Typography> 



                <Collapse in={ expanded } timeout={ `auto` } unmountOnExit>
                  <CardContent><Typography variant={ `body1` } gutterBottom>
                    { content }
                  </Typography></CardContent>
                </Collapse>
              </Grid>

            </Grid>
          
      </div>
}
