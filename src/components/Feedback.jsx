import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  feedback: { 
    border: '1px solid red',
  },
}))

export default function Feedback() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.feedback ) }>
             https://github.com/listingslab-software/localify/issues/18
          </div>
}
