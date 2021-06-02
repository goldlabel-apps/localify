import React from 'react'
import clsx from 'clsx'
import { updateTrip } from '../../redux/localify/actions'
import {
    makeStyles,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    TextField,
    Typography,
} from '@material-ui/core/'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  trip: {
    color: theme.palette.primary.main,
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
  card: {
    width: 345,
  },
  media: {
    height: 140,
  },
}))

export default function Trip( props ) {
  
  const { trip } = props
  const {
    id,
  } = trip
  if ( !id ) return null


  // console.log ('trip', trip)
  const classes = useStyles()
  const [updatedTrip, setNewTrip] = React.useState( trip )



  const stageChange = (key, value) => {
    let t = {
      ...updatedTrip,
      [key]: value,
    }
    setNewTrip( t )
  }  


  return <div className={ clsx ( classes.trip ) }>
            <Card className={ clsx ( classes.card ) }>
              
             

              <CardContent>
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
              </CardContent>

              <CardActions>
                
                <div className={ clsx ( classes.grow )} />
                <Button
                  color={ `default` }
                  variant={ `text` }
                  onClick={ (e) => {
                    e.preventDefault()
                    updateTrip( id, updatedTrip )
                  }}>
                    <span className={ clsx ( classes.btnTxt ) }>
                      Update
                    </span>
                    <Icon icon={`save`} />
                </Button>
              </CardActions>

          </Card>
        </div>
}






/*

              <pre>
                  { JSON.stringify( updatedTrip, null, 2 ) }
                </pre>


                action={ <IconButton 
                          color={ `primary` }
                          onClick={ (e) => {
                            e.preventDefault()
                            console.log ('expand id ', id)
                          }}>
                          <Icon icon={ `expand` } color={ `inherit` } />
                        </IconButton> }
*/