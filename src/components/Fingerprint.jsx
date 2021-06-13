import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Collapse,
    IconButton,
    Grid,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  device: {
     border: '1px solid pink',
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

  
  return <div className={ classes.fingerprint }>
             <Grid container>
                <Grid item>
                  <IconButton
                    color={ helpIconColor }
                    onClick={ ( e ) => {
                      e.preventDefault()
                      setExpanded( !expanded )
                    }}
                  >
                    <Icon icon={`help`} color={ helpIconColor } />
                  </IconButton>
                  <Typography variant={ `button` } className={ classes.padLeft }>
                    Your Fingerprint
                  </Typography>                  
                </Grid>

                <Grid item>
                  <Collapse in={ expanded } timeout={ `auto` } unmountOnExit>

                    <Typography variant={ `body1` } gutterBottom>
                      this is what we sent to our server
                    </Typography>

                    
                  </Collapse>
              </Grid>
            </Grid>
          </div>

}

