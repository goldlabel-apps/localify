import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  home: {
    color: theme.palette.primary.main,
  },
  lighter:{
    // fontWeight: 'lighter',
  },
  padded:{
    padding: theme.spacing(),
  }
}))

export default function Home() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.home ) }>
              <Typography variant={ `h6` } >
                Home
              </Typography>
        </div>
}

