import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    IconButton,
    Card,
    CardHeader,
    CardContent,
    Grid,
    TextField,
    Button,
} from '@material-ui/core/'
import { 
  goTo,
} from '../../redux/app/actions'
import {
  Icon,
} from '../../theme'

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  inputTxt:{
    maxWidth: 500,
  },
  card: {
    boxShadow: 'none',
  },
  btn:{
    margin: theme.spacing(),
  },
  btnTxt: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
}))

export default function TCreate() {
  

  //newTrip

  const localifySlice = useSelector(state => state.localify)
  const {
    newTrip,
  } = localifySlice

  const { title } = newTrip

  // console.log ('newTrip', newTrip)

  const classes = useStyles()
  const [newTripState, setNewTrip] = React.useState( {} )
  
  const stageChange = (key, value) => {
    let t = {
      ...newTripState,
      [key]: value,
    }
    setNewTrip( t )
  }  

  return <Card className={ clsx ( classes.card ) }>

            <CardHeader 
              avatar={ <IconButton
                          color={ `secondary` }
                          onClick={ ( e ) => {
                            e.preventDefault()
                            goTo( `/trip/new`, `New Trip`)
                          }}>
                          <Icon icon={ `new` } color={ `secondary` } />
                        </IconButton> }
              title={ `New Trip` }
            />
            <CardContent>
              <Grid container>               
                  

                  <Grid item xs={ 12 } md={ 8 }>
                    <form className={ classes.form } noValidate autoComplete="off">
                      <TextField 
                        fullWidth
                        autoFocus
                        required
                        className={ classes.inputTxt } 
                        value={ title }
                        label={ `Title` }
                        variant={ `standard` }
                        onChange={ ( e ) => {
                           stageChange(`title`, e.target.value)
                        }}
                      />
                    </form>
                  </Grid>

                  




                  <Grid item xs={ 12 }  md={ 4 }>
                    <Button
                      className={ clsx ( classes.btn ) }
                      variant={ `outlined` }
                      color={ `primary` }
                      onClick={ ( e ) => {
                        e.preventDefault()
                        console.log ('reset')
                      }}>
                      <Icon icon={ `refresh` } />
                      <span className={ clsx ( classes.btnTxt ) }>
                        Reset
                      </span>
                    </Button>
                    <Button 
                      className={ clsx ( classes.btn ) }
                      variant={ `contained` }
                      color={ `primary` }
                      onClick={ ( e ) => {
                        e.preventDefault()
                        console.log ('reset')
                      }}>
                      <Icon icon={ `save` } />
                      <span className={ clsx ( classes.btnTxt ) }>
                        Save
                      </span>
                    </Button>
                  </Grid>


                  <Grid item xs={ 12 }>
                    <pre>
                      { JSON.stringify( newTrip, null, 2 ) }
                    </pre>
                    
                  </Grid>

                </Grid>
              </CardContent>
          </Card>
}


