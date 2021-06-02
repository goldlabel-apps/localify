import React from 'react'
import {
    makeStyles,
    Button,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  goTo,
} from '../../redux/app/actions'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  helpStart: {
    color: theme.palette.primary.main,
  },
}))

export default function HelpStart() {
  
  const classes = useStyles()

  return <div className={ classes.helpStart }>
            <Typography variant={ `h6` } >
                Help
            </Typography>

            <Grid container>
              <Grid item xs={ 12 } >
                <Typography variant={ `body2` }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent lacinia mi dolor, vel dignissim justo molestie sed. 
                  Fusce tincidunt ante in porta finibus. Donec a metus neque. 
                </Typography>
              </Grid>
              <Grid item xs={ 12 } >
                <Button
                  color={ `secondary` }
                  variant={ `text` } 
                  onClick={ ( e ) => {
                    e.preventDefault()
                    goTo( `/help`, `Help` )
                  }}>
                  More Help
                </Button>
              </Grid>
            </Grid>


        </div>
}
