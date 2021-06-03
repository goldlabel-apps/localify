import React from 'react'
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
  toggleHelpOn,
} from '../../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  helpStart: {
    color: theme.palette.primary.main,
  },
}))

export default function HelpStart() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    helpOn,
  } = appSlice

  return <div className={ classes.helpStart }>
            
            <Typography variant={ `h6` } >
                Help
            </Typography>

            <Grid container>
              
              <Grid item xs={ 12 } md={ 6 } >
                <FormGroup row>
                  <FormControlLabel
                    label={ `Turn help ${ helpOn ? `off` : `on` }` }
                    control={
                      <Switch
                        checked={ helpOn }
                        onChange={ () => { toggleHelpOn( !helpOn ) } }
                        name="helpOn"
                        color="primary"
                      />
                    }
                    
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={ 12 } md={ 6 } >
                <Typography variant={ `body2` } gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent lacinia mi dolor, vel dignissim justo molestie sed. 
                  Fusce tincidunt ante in porta finibus. Donec a metus neque. 
                </Typography>
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
*/