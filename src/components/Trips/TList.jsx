import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    List,
    Card,
    CardHeader,
} from '@material-ui/core/'
import {
  TItem,
} from './'
import {
  Icon,
} from '../../theme'

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: 'none',
  },
}))

export default function TList() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    trips,
  } = localifySlice


  return <Card className={ clsx( classes.card ) }>
            <CardHeader 
              title={ `Browse` }
              avatar={ <Icon icon={ `trips` } color={ `secondary` } /> }
              
            />
              <List dense>
                { trips.map ( (item, i) => {
                    return <TItem trip={ item } key={ `trip_${ i }` } />
                })}
              </List>
        </Card>
}

