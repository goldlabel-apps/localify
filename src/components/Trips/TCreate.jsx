import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core/'
import {
  toggleCreateOpen,
} from '../../redux/localify/actions'
import { TForm } from './'
import { 
  Icon,
} from '../../theme'

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

export default function TCreate() {
  
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify)
  const {
    createOpen,
  } = localifySlice

  return  <Accordion 
            expanded={ createOpen }
            className={clsx( classes.plainAccordion )}
            onChange={ () => {
              toggleCreateOpen ( !createOpen )
            }}>
            <AccordionSummary
                  expandIcon={ <Icon icon={`panel-toggle`} color={ `secondary` } /> }
                  id={ `help` } >
                  <div className={ clsx( classes.icon )}>
                    <Icon icon={ `create` } color={ `secondary` } />
                  </div>
                  <Typography 
                    className={clsx( classes.hTag )}>
                    Create
                  </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TForm />
            </AccordionDetails>
          </Accordion>
}
