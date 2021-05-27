import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  settingsMenu:{
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  title:{
  	padding: theme.spacing(2),
  	fontWeight: 'normal',
  },
  titleTxt:{
	marginLeft: theme.spacing(4),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
    pingpongTrigger: {
    position: 'absolute',
    right: 55 + theme.spacing(),
    textTransform: 'none',
    background: 'white',
  },
}))

export default function SettingsMenu( props ) {

	const classes = useStyles() 	

	return	<div className={ clsx( classes.settingsMenu )} >
    				<List>
    					<ListItem 
    						button
    						onClick={ (e) => { 
    							e.preventDefault()
    							// gotoURL(`/wp-admin/`, `_self`)
    						}}>
    						<ListItemAvatar>
    							<Icon icon={ `games` } color={ `primary` } />
    						</ListItemAvatar>
    						<ListItemText 
    							primary={ `Gamer Settings` }
    						/>
    					</ListItem>

    				</List>
    			</div>
}
