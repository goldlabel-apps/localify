import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  view: {
  },
}))

export default function TView() {
  
  const classes = useStyles()


  return <div className={ clsx ( classes.view ) }>
            TView
        </div>
}


