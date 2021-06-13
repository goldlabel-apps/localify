import React from 'react'
import { useSelector } from 'react-redux'
import { initIndividual } from '../redux/individual/actions'
import {
    makeStyles,
    Typography,
    Collapse,
    IconButton,
    Grid,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  individual: {
  },
  fingerprint:{
    // border: '1px solid pink',
  },
  padLeft:{
    marginLeft: theme.spacing(),
  },
  secColText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Individual() {
  
  const classes = useStyles()
  const individualSlice = useSelector( state => state.individual ) 

  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice

  const [ expanded, setExpanded ] = React.useState( true )

  React.useEffect(() => {
    const {
      initted,
      initting,
    } = individualSlice
    if (!initted && !initting) initIndividual()
  }, [ individualSlice ]) 

  const {
    id,
    individual,
  } = individualSlice
  if ( !id || !individual ) return null

  let helpIconColor = `primary`
  if ( darkMode ) helpIconColor = `secondary`

  
  return <div className={ classes.individual }>
            
           <div className={ classes.fingerprint }>
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

                    <Typography variant={ `body2` } gutterBottom className={ classes.secColText }>
                      { individual.individual } 
                    </Typography>

                    <Typography variant={ `body1` } gutterBottom>
                      Your fingerprint is a unique identifier which takes some 
                      details from your device (like.... which phone you're using), combines 
                      it into a long string and sends it to us. When you come back your device 
                      makes the same string, so we know who you are without you having to log in
                    </Typography>

                    
                  </Collapse>
              </Grid>
            </Grid>
          </div>


            

            

            

            




          </div>
}

/*

<Typography variant={ `body2` }>
                    { individual.individual } 
                  </Typography>

            <Typography variant={ `body1` }>
              Location String
            </Typography>
            <Typography variant={ `body1` }>
              Device String
            </Typography>
              <pre>
                { JSON.stringify( individual, null, 2 ) }
              </pre>
*/