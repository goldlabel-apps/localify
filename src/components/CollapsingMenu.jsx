import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	collapsing:{
	},
	fullWidth:{
		width: '100%',
	},
	link: {
		cursor: 'pointer',
	},
	plainAccordion: {
		boxShadow: 'none',
		borderRadius: 0,
		border: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	btnTxt: {
		marginLeft: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
	},
	icon:{
		marginRight: theme.spacing( 2 ),
	},
	hTag: {
		// fontWeight: 'lighter',
	},
	root: {
    	width: '100%',
	},
	heading: {
		marginTop: theme.spacing( 0.45 ),
	},
}))

export default function CollapsingMenu( props ) {
	
	const classes = useStyles()
	
	const { 
		children,
		options
	} = props

	if ( !children ) return null
		
	const {
		defaultExpanded,
		title,
		icon,
		toggleFunc,
	} = options 

	return	<Accordion 
				defaultExpanded={ defaultExpanded }
				className={clsx( classes.plainAccordion )}
				onChange={ toggleFunc }>
				<AccordionSummary
		          expandIcon={ <Icon icon={`panel-toggle`} color={ `secondary` } /> }
		          id={ `help` } >
		          <div className={ clsx( classes.icon )}>
		          	<Icon icon={ icon } color={ `secondary` } />
		          </div>
		          <Typography 
		          	variant={ `button` }
		          	className={clsx( classes.hTag )}>
		          	{ title }
		          </Typography>
				</AccordionSummary>
				<AccordionDetails>
					{ children }
				</AccordionDetails>
			</Accordion>
}
