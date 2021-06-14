import React from 'react'
import { 
    useSelector,
} from 'react-redux'
import {
    makeStyles,
    Button,
    Dialog,
    DialogContent,
    TextField,
    LinearProgress,
    Typography,
} from '@material-ui/core/'
import { Alert } from '@material-ui/lab/'
import { 
	Icon,
} from '../theme'
import { signin } from '../redux/auth/actions'

const useStyles = makeStyles(theme => ({
    dialog:{
        maxWidth: 360,
        margin: 'auto',
    },
    title:{
        textAlign: 'center',
    },
    btnTxt:{
    	marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
    },
    vSpace:{
        height: theme.spacing()
    },
}))

export default function AuthForm() {

	const classes = useStyles()
	const [creds, setCreds] = React.useState({ email: null, password: null })
	const authSlice = useSelector(state => state.auth)
    const {
    	error,
        isAuthing,
        authed,
    } = authSlice

	const validate = () => {
        let isValid = true
        const email = document.getElementById(`email`).value
        const password = document.getElementById(`password`).value
        if (email === ``){
            isValid = false
        }
        if (password === ``){
            isValid = false
        }
        let result = {
            isValid,
            email,
            password,
        }
        setCreds({ email: email.toLowerCase(), password })
        return result
    }

    if ( authed ) return null
	
	return	<Dialog 
				open
                className={classes.dialog}
				fullWidth={ true }
				maxWidth={`xs`}>
                <div className={classes.vSpace} />
  				<div className={classes.vSpace} />
  				<Typography variant={`h6`} className={classes.title}>
					{process.env.REACT_APP_APP}
				</Typography>
  				{ error ? <DialogContent>
    				<Alert severity="warning">
                        { error }
                    </Alert>
                </DialogContent> : null }
                <div className={classes.vSpace} />
  				<DialogContent>
                    <TextField
                        fullWidth
                        color={ `primary` }
                        onChange={(e) => {
                            validate()
                        }}
                        label={`Email`}
                        id={`email`}
                    />
                    <div className={classes.vSpace} />
                    <div className={classes.vSpace} />
                    <TextField
                        fullWidth
                        onChange={(e) => {
                            validate()
                        }}
                        type={`password`}
                        label={`Password`}
                        id={`password`}
                    />
                    <div className={classes.vSpace} />
                    <div className={classes.vSpace} />
	                { !isAuthing ? <React.Fragment>
		                <Button
                            fullWidth
                            variant={`text`}
                            onClick={(e) => {
                                e.preventDefault()
                                if (validate().isValid) {
                                	signin(creds)
                                }
                            }}>    
                                
                            <span className={classes.btnTxt}>
                                Sign in
                            </span>
                            <Icon icon={ `right` } color={ `inherit` } /> 
                    	</Button>
                    	<div className={classes.vSpace} />
                	</React.Fragment> 
                	: <React.Fragment>
	                        		<div className={classes.vSpace} />
	                        		<LinearProgress />
	                        		<div className={classes.vSpace} />
	                        	</React.Fragment>
                	}
                </DialogContent>
  			</Dialog>
}
