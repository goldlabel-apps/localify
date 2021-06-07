import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Backdrop,
} from '@material-ui/core/'
import {
    SpeedDial,
    SpeedDialIcon,
    SpeedDialAction,
} from '@material-ui/lab/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    top: theme.spacing(),
    right: theme.spacing(),
    
  },
  speedDialIcon:{
    // border: '1px solid red',
  }
}))

const actions = [
  { icon: <Icon icon={ `github` } color={ `black` } />, name: 'GitHub' },
]

export default function MenuDial() {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return <div className={classes.root}>
          <Backdrop open={open} />
          <SpeedDial
            ariaLabel={ `Dial Menu` }
            direction={ `down` }
            className={ clsx( classes.speedDial) }
            icon={ <SpeedDialIcon className={ classes.speedDialIcon } /> }
            onClose={ handleClose }
            onOpen={ handleOpen }
            open={ open }>

            {actions.map((action) => (
              <SpeedDialAction
                key={ action.name }
                icon={ action.icon }
                tooltipTitle={ action.name }
                onClick={ handleClose }
              />
            ))}
          </SpeedDial>
        </div>
}
