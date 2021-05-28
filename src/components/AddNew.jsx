import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Fab,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  addNew: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  fab:{
    background: 'none',
  },
}))

export default function AddNew() {
  const classes = useStyles()

  return (
    <div className={ clsx (classes.addNew) } >

      <Fab 
        className={ clsx ( classes.fab ) }
        variant={ `extended` } 
        color={ `default` }
        onClick={ ( e ) => {
          e.preventDefault()
          console.log ('add new')
        }}>
        <Icon icon={ `settings` } />
        <span className={ clsx ( classes.btnTxt ) }>
        Add New
        </span>
      </Fab>

    </div>
  )
}
