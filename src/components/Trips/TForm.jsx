import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Grid,
    TextField,
    Button,
} from '@material-ui/core/'
import { 
  updateNewTrip,
  saveNewTrip,
} from '../../redux/localify/actions'
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
  grow: {
    flexGrow: 1,
  },
  btn:{
    margin: theme.spacing(),
  },
  vertSpacer: {
    height: theme.spacing(),
  },
  btnTxt: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
}))

export default function TForm() {
  

  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    newTrip,
  } = localifySlice
  const { 
    title,
    countryCode,
  } = newTrip
  

  return <Grid container>               
                  
                  <Grid item xs={ 12 }>
                    <form className={ classes.form } noValidate autoComplete="off">
                      <TextField 
                        fullWidth
                        required
                        id={ `title` }
                        className={ classes.inputTxt } 
                        value={ title }
                        label={ `Title` }
                        variant={ `standard` }
                        onChange={ ( e ) => {
                           updateNewTrip(`title`, e.target.value)
                        }}
                      />
                      <div className={ clsx ( classes.vertSpacer ) }/>
                      <TextField 
                        fullWidth
                        id={ `countryCode` }
                        className={ classes.inputTxt } 
                        value={ countryCode || `` }
                        label={ `Country Code` }
                        variant={ `standard` }
                        onChange={ ( e ) => {
                           updateNewTrip(`countryCode`, e.target.value)
                        }}
                      />
                      <div className={ clsx ( classes.vertSpacer ) }/>

                    </form>
                  </Grid>

                  <Grid item xs={ 12 }>
                    <div className={ clsx ( classes.grow ) }/>
                    <Button 
                      className={ clsx ( classes.btn ) }
                      variant={ `contained` }
                      color={ `secondary` }
                      onClick={ ( e ) => {
                        e.preventDefault()
                        saveNewTrip()
                      }}>
                      <Icon icon={ `save` } />
                      <span className={ clsx ( classes.btnTxt ) }>
                        Save
                      </span>
                    </Button>
                  </Grid>

                </Grid>
}