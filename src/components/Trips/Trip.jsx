import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { update } from '../../redux/localify/actions'
import moment from 'moment'
import {
    makeStyles,
    Avatar,
    Button,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    TextField,
} from '@material-ui/core/'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  trip: {
    margin: theme.spacing(),
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
  title:{
    fontWeight: 'lighter',
  },
}))

export default function Trip( props ) {
  
  const { trip } = props
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const [newTrip, setNewTrip] = React.useState( trip )

  const stageChange = (key, value) => {
    let t = {
      ...newTrip,
      [key]: value,
    }
    setNewTrip( t )
  }

  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )
  
  const {
    id,
    title,
    image,
    updated,
    flag,
  } = trip
  if ( !title ) return null

  return <div className={ clsx ( classes.trip ) }>
            <Card className={ clsx ( classes.card ) }>
              <CardHeader 
                avatar={ <Avatar src={ flag } /> }
                title={ title }
                subheader={ moment( updated ).fromNow() }
              />
              { image ? <CardMedia
                className={classes.media}
                image={ image }
                title={ title }
              /> : null }

              <CardContent>

                <Grid container>
                  
                  <Grid item xs={ 2 }>
                    Title
                  </Grid>
                  
                  <Grid item xs={ 10 }>
                    <TextField 
                      fullWidth
                      defaultValue={ title } 
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
                    update( id, newTrip )
                  }}>
                    <span className={ clsx ( classes.btnTxt ) }>
                      Save
                    </span>
                    <Icon icon={`save`} />
                </Button>
              </CardActions>

          </Card>
        </div>
}






/*

              <pre>
                  { JSON.stringify( newTrip, null, 2 ) }
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