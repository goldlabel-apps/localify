import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
} from '@material-ui/core/'
import { Icon } from '../theme'
const useStyles = makeStyles((theme) => ({
  cardKML: {
    margin: theme.spacing(),
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  title:{
    fontWeight: 'lighter',
  },
}))

export default function Trip( props ) {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )

  const { trip } = props
  // console.log( 'trip', trip )

  const {
    id,
  } = trip

  return <div className={ clsx ( classes.cardKML ) }>
            <Card className={ clsx ( classes.card ) }>
              <CardHeader 
                avatar={ <IconButton 
                          color={ `primary` }
                          onClick={ (e) => {
                            e.preventDefault()
                            console.log ('kml click ')
                          }}>
                            <Icon icon={ `settings` } color={ `secondary` } />
                          </IconButton> }
                title={ id }
                subheader={ `KML Card` }
                action={ <IconButton 
                          color={ `primary` }
                          onClick={ (e) => {
                            e.preventDefault()
                            console.log ('kml click ')
                          }}>
                          <Icon icon={ `expand` } color={ `secondary` } />
                        </IconButton> }
              />

              <CardMedia
                className={classes.media}
                image="/kmz/sunshine_coast_surfing/sunshine_coast_surfing.jpg"
                title={ `Sunshine Coast Surfing, Coolum Beach` }
              />


              <CardContent>
                fwf
              </CardContent>
              
              <CardActions>

                <Typography variant={ `body2` } className={ clsx ( classes.none ) }>
                  Choose one of these actions
                </Typography>


                <Button
                  color={ `secondary` }
                  variant={ `outlined` }
                >
                  Cancel
                </Button>
                <Button
                  color={ `secondary` }
                  variant={ `contained` }
                >
                  OK
                </Button>
              </CardActions>
          </Card>
        </div>
}
