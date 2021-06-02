import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Typography,
    Grid,
    TextField,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  newTrip: {
    color: theme.palette.primary.main,
  },
}))

export default function NewTrip() {
  
  const classes = useStyles()
  const [newTrip, setNewTrip] = React.useState( {} )
  
  const stageChange = (key, value) => {
    let t = {
      ...newTrip,
      [key]: value,
    }
    setNewTrip( t )
  }  

  return <div className={ clsx ( classes.newTrip ) }>
              <Typography variant={ `h6` } >
                New Trip
              </Typography>

              <Grid container>               
                  <Grid item xs={ 12 }>
                    <Typography variant={ `button` } gutterBottom>
                      Title
                    </Typography>
                    <TextField 
                      fullWidth
                      defaultValue={ `title` } 
                      onChange={ ( e ) => {
                         stageChange(`title`, e.target.value)
                      }}
                    />
                  </Grid>
                </Grid>




          </div>
}


