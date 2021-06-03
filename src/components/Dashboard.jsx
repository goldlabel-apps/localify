import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import {
    makeStyles,
    // Button,
    Typography,
    Grid,
} from '@material-ui/core/'
// import { 
//   goTo,
// } from '../redux/app/actions'
// import { Icon } from '../theme'

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

export default function Dashboard() {
  
  const classes = useStyles()

  return <div className={ clsx( classes.home ) }>
              

              <Grid container>

                <Grid item xs={ 12 } >
                  <Typography variant={ `h6` } >
                    Dashboard
                  </Typography>
                </Grid>

                <Grid item xs={ 12 } >
                  das,md
                </Grid>

              </Grid>
          </div>
}
