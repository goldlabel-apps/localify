import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Grid,
    FormGroup,
    FormControlLabel,
    Switch,
} from '@material-ui/core/'
import {
  toggleDarkMode,
} from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  settings: {
  },
  vertSpacer: {
    height: 20,
  },
}))

export default function Settings() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice

  return <div className={ classes.settings }>
            
            <Typography variant={ `h6` } >
                Settings
            </Typography>

            <Grid container>
              
              <Grid item xs={ 12 } md={ 6 } >
              <div className={ clsx ( classes.vertSpacer ) }/>
                <FormGroup row>
                  <FormControlLabel
                    label={ `Turn dark mode ${ darkMode ? `off` : `on` }` }
                    control={
                      <Switch
                        checked={ darkMode }
                        onChange={ () => { toggleDarkMode( !darkMode ) } }
                        name={ `darkMode` }
                      />
                    }
                  />
                </FormGroup>
              </Grid>

              

            </Grid>


        </div>
}

/*
<Button
                  color={ `primary` }
                  variant={ `outlined` } 
                  onClick={ ( e ) => {
                    e.preventDefault()
                    goTo( `/help`, `Help` )
                  }}>
                  More Help
                </Button>

<Grid item xs={ 12 } md={ 6 } >
                <Typography variant={ `body2` } gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent lacinia mi dolor, vel dignissim justo molestie sed. 
                  Fusce tincidunt ante in porta finibus. Donec a metus neque. 
                </Typography>
              </Grid>
*/