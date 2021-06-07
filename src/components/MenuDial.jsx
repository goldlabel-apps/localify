import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import SaveIcon from '@material-ui/icons/Save'
import PrintIcon from '@material-ui/icons/Print'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    top: theme.spacing(),
    right: theme.spacing(),
  },
}))

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
]

export default function MenuDial() {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  // const [hidden, setHidden] = React.useState(false)


  // const handleVisibility = () => {
  //   setHidden((prevHidden) => !prevHidden)
  // }

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
            className={ classes.speedDial }
            hidden={ false }
            icon={ <Icon icon={`menu`} /> }
            onClose={ handleClose }
            onOpen={ handleOpen }
            open={ open }
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={ action.name }
                icon={ action.icon }
                tooltipTitle={ action.name }
                tooltipOpen
                onClick={ handleClose }
              />
            ))}
          </SpeedDial>
        </div>
}





/*
      <Button onClick={ handleVisibility }>
        Toggle Speed Dial
      </Button>
*/