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
    background: 'none',
    boarder: 'none',
    boxShadow: 'none',
  },
}))

export default function TList() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    trips,
    selected,
  } = localifySlice


  return <Card className={ clsx( classes.card ) }>
            <CardHeader 
              title={ `Browse` }
              avatar={ <Icon icon={ `trips` } color={ `secondary` } /> }
              
            />
              <List dense>
                { trips.map ( (item, i) => {
                    let isSelected = false
                    if (item.id === selected) isSelected = true
                    return <TItem trip={ item } isSelected={ isSelected } key={ `trip_${ i }` } />
                })}
              </List>
        </Card>
}

