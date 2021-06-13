import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Collapse,
    IconButton,
    Grid,
} from '@material-ui/core/'
import { getContent } from '../redux/app/actions'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  panel: {
    margin: theme.spacing(),
  },
  padLeft:{
    marginLeft: theme.spacing(),
  },
  secColText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Fingerprint() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice
  const [ expanded, setExpanded ] = React.useState( false )
  let helpIconColor = `primary`
  if ( darkMode ) helpIconColor = `secondary`
  const contentObj = getContent( `fingerprint` )
  const {
    title,
    content,
  } = contentObj
  const individualSlice = useSelector(state => state.individual) 
  const {
    individual,
  } = individualSlice
  if ( !individual ) return null

  const individualStr = individual.individual

  return <div className={ classes.panel }>
             <Grid container>
                <Grid item>
                  <IconButton
                    color={ helpIconColor }
                    onClick={ ( e ) => {
                      e.preventDefault()
                      setExpanded( !expanded )
                    }}
                  >
                    <Icon icon={`fingerprint`} color={ helpIconColor } />
                  </IconButton>
                  <Typography variant={ `button` } gutterBottom>
                    { title }
                  </Typography>  
                  <Typography variant={ `body2` }>
                    { individualStr } 
                  </Typography>               
                </Grid>
                <Grid item>
                  <Collapse in={ expanded } timeout={ `auto` } unmountOnExit>
                    <Typography variant={ `body1` } gutterBottom>
                      { content }
                    </Typography>
                  </Collapse>
              </Grid>
            </Grid>
          </div>
}
