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
    margin: theme.spacing(),
    width: 32,
    height: 32,

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
  let helpIconColor = `secondary`
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
  return <div className={ classes.panel }>
            <Grid container>

              <Grid item>
                
              </Grid>

              <Grid item>
                <IconButton
                  color={ helpIconColor }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    setExpanded( !expanded )
                  }}>
                  <Icon icon={`map`} color={ helpIconColor } />
                </IconButton>

                <Typography variant={ `button` } className={ classes.padLeft }>
                  { title }
                </Typography> 

                <div className={ clsx( classes.none ) }>
                  <CardHeader 
                    avatar={ <Avatar src={ flagSrc } /> }
                    title={ `IP ${ ip }` }
                    subheader={ locationStr }
                  />
                </div>

                <Collapse in={ expanded } timeout={ `auto` } unmountOnExit>
                  <CardContent><Typography variant={ `body1` } gutterBottom>
                    { content }
                  </Typography></CardContent>
                </Collapse>
              </Grid>

            </Grid>
          
      </div>
}

/*
<pre>
              { JSON.stringify(individual, null, 2)}
            </pre>
*/