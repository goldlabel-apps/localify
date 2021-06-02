import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  single: {
    margin: theme.spacing(),
  },
}))

export default function Single() {
  
  const classes = useStyles()


  return <div className={ clsx ( classes.single ) }>
            Single
        </div>
}


