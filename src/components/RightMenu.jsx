import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Icon } from '../theme'
import { navigateTo } from '../redux/app/actions'
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  rightMenu: {
    border: '1px solid gold',
  },
}))

export default function RightMenu() {
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log ('open', open)
  return <div className={clsx( classes.rightMenu )}>
          <List dense>

            <ListItem 
              button
              onClick={( e ) => {
                e.preventDefault()
                console.log ( 'dalsjd' )
              }}>

              <ListItemIcon>
                <Icon icon={`github`} color={`black`} />
              </ListItemIcon>
              <ListItemText primary={`GitHub Repository`} />
            </ListItem>
          </List>
        </div>
}
