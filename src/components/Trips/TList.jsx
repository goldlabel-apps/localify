import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
    List,
    Card,
    CardHeader,
} from '@material-ui/core/'
import { 
  goTo,
} from '../../redux/app/actions'
import {
  TItem,
} from './'
import {
  Icon,
} from '../../theme'

const useStyles = makeStyles((theme) => ({
  trips: {
  },
  padded:{
    padding: theme.spacing(),
  }
}))

export default function TList() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    trips,
  } = localifySlice


  return <Card className={ clsx( classes.trips ) }>
            <CardHeader 
              title={ `Trips` }
              avatar={ <IconButton
                          color={ `secondary` }
                          onClick={ ( e ) => {
                            e.preventDefault()
                            goTo( `/trips`, `Trips`)
                          }}>
                          <Icon icon={ `trips` } color={ `secondary` } />
                        </IconButton> }
              
            />
              <List dense>
                { trips.map ( (item, i) => {
                    return <TItem trip={ item } key={ `trip_${ i }` } />
                })}
              </List>
        </Card>
}

