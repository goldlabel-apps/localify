import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { goTo } from '../redux/app/actions'
import moment from 'moment'
import {
    makeStyles,
    Avatar,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardActions,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  cardKML: {
    margin: theme.spacing(),
  },
  card: {
    width: 300,
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
  const {
    id,
    title,
    image,
    time,
    flag,
  } = trip

  return <div className={ clsx ( classes.cardKML ) }>
            <Card className={ clsx ( classes.card ) }>
              <CardHeader 
                avatar={ <Avatar src={ flag } /> }
                title={ title }
                subheader={ moment( time ).fromNow() }
              />
              { image ? <CardMedia
                className={classes.media}
                image={ image }
                title={ title }
              /> : null }
              <CardActions>
                <Button
                  color={ `secondary` }
                  variant={ `outlined` }
                  onClick={ (e) => {
                    e.preventDefault()
                    goTo(`/trip/${ id }`)
                  }}>
                  View
                </Button>
              </CardActions>
          </Card>
        </div>
}






/*





                action={ <IconButton 
                          color={ `primary` }
                          onClick={ (e) => {
                            e.preventDefault()
                            console.log ('expand id ', id)
                          }}>
                          <Icon icon={ `expand` } color={ `inherit` } />
                        </IconButton> }
*/