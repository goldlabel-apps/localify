import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  goTo,
  toggleHelpOn,
} from '../../redux/app/actions'
import { 
  Collapsing,
} from '../'
// import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  help: {
  },
}))

export default function Page() {

  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    helpOpen,
  } = appSlice

  return <div className={clsx( classes.help )}>
          <Collapsing options={{
            open: helpOpen,
            toggleFunc: () => {
              toggleHelpOn( !helpOpen )
            },
            icon: `help`,
            iconColor: `secondary`,
            title: `Help`,
          }}>
            <Grid container>
              <Grid item xs={ 12 } >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent lacinia mi dolor, vel dignissim justo molestie sed. 
                  Fusce tincidunt ante in porta finibus. Donec a metus neque. 
                </Typography>
              </Grid>
              <Grid item xs={ 12 } >
                <Button
                  color={ `primary` }
                  variant={ `outlined` } 
                  onClick={ ( e ) => {
                    e.preventDefault()
                    goTo( `/help`, `Help` )
                  }}>
                  Help
                </Button>
              </Grid>
            </Grid>
          </Collapsing>
        </div>
}
