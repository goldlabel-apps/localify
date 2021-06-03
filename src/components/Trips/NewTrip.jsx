import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    IconButton,
    Typography,
    Card,
    CardHeader,
    CardContent,
    Grid,
    TextField,
} from '@material-ui/core/'
import { 
  goTo,
} from '../../redux/app/actions'
import {
  Icon,
} from '../../theme'

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

  return <Card className={ clsx ( classes.newTrip ) }>

            <CardHeader 
              avatar={ <IconButton
                          color={ `secondary` }
                          onClick={ ( e ) => {
                            e.preventDefault()
                            goTo( `/trip/new`, `New Trip`)
                          }}>
                          <Icon icon={ `new` } color={ `secondary` } />
                        </IconButton> }
              title={ `New Trip` }
            />
            <CardContent>
              <Grid container>               
                  <Grid item xs={ 12 }>
                    <Typography gutterBottom>
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
              </CardContent>
          </Card>
}


