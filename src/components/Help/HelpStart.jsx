import React from 'react'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  helpStart: {
    color: theme.palette.primary.main,
  },
}))

export default function HelpStart() {
  
  const classes = useStyles()

  return <div className={ classes.helpStart }>
            <Typography variant={ `button` } >
                Help
            </Typography>
        </div>
}
